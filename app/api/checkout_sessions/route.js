// app/api/checkout_sessions/route.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    // Parse form data from request body
    const {
      parentName,
      phoneNumber,
      childName,
      childId,
      dob,
      gender,
      fees,
      childName2 = null,
      childId2 = null,
      dob2 = null,
      gender2 = null,
      fees2 = null,
    } = await req.json();

    const line_items = [{ price: fees, quantity: 1 }];

    if (fees2) {
      line_items.push({ price: fees2, quantity: 1 });
    }

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
      metadata: {
        parentName,
        phoneNumber,
        childName,
        childId,
        dob,
        gender,
        fees,
        childName2,
        childId2,
        dob2,
        gender2,
        fees2,
      },
    });

    return new Response(JSON.stringify({ id: session.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Error creating Stripe Checkout session", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
