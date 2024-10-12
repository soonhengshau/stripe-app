import Stripe from "stripe";
import { query } from "@/app/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// No need for config in Next.js 13.4 and above, as it's deprecated.

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");
  let event;

  try {
    // Get raw request body as a string
    const buf = await req.text();

    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error(`Webhook error: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle the event types
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      const { metadata, customer_details } = session;

      const insertText = `INSERT INTO registrations (parent_name, parent_email, parent_phone, child1_name,
      child1_id, child1_birth_date, child1_gender, child1_fees, child2_name, child2_id, child2_birth_date,
       child2_gender, child2_fees) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;

      // Extract metadata (this contains the form data)
      const insertValues = [
        metadata.parentName,
        customer_details.email,
        metadata.phoneNumber,
        metadata.childName,
        metadata.childId,
        metadata.dob,
        metadata.gender,
        metadata.fees,
        metadata.childName2 || null,
        metadata.childId2 || null,
        metadata.dob2 || null,
        metadata.gender2 || null,
        metadata.fees2 || null,
      ];

      await query(insertText, insertValues);

      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
