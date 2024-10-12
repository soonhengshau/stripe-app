import { NextResponse } from "next/server";
import { createEvent } from "ics";

export async function POST(req) {
  const data = await req.json();
  console.log("Received data in API:", data); // Log received data for debugging

  // Check if date and time exist
  if (!data.date || !data.time) {
    return new NextResponse("Missing date or time", { status: 400 });
  }

  try {
    // Parse the date and time from data
    const [year, month, day] = data.date.split("-").map(Number);
    const [hourPart, minutePart] = data.time.split(":");
    const minute = parseInt(minutePart.replace(/am|pm/, ""), 10);
    const hour = parseInt(hourPart, 10);

    const isPM = data.time.includes("pm"); // Check if it's PM
    const eventHour = isPM && hour < 12 ? hour + 12 : hour; // Convert to 24-hour format if PM

    // Define event details
    const event = {
      start: [year, month, day, eventHour, minute],
      duration: { hours: 1, minutes: 0 },
      title: "Swimsafer Assessment",
      description: "This is a reminder to the Assessment. Please be punctual",
      location: "2 Bukit Batok Street 22, Singapore 659581",
      url: "https://example.com",
      status: "CONFIRMED",
      busyStatus: "BUSY",
      organizer: { name: "Soon Heng", email: "shau_sh@yahoo.com.sg" },
      attendees: [{ name: `${data.name}`, email: "attendee@example.com" }],
    };

    // Generate the .ics file
    const { error, value } = createEvent(event);

    if (error) {
      return new NextResponse("Error generating event: " + error.message, {
        status: 500,
      });
    }

    // Set headers to download the file as an .ics
    return new NextResponse(value, {
      headers: {
        "Content-Type": "text/calendar",
        "Content-Disposition": 'attachment; filename="event.ics"',
      },
    });
  } catch (error) {
    console.error("Error processing data:", error);
    return new NextResponse("Error processing data", { status: 500 });
  }
}
