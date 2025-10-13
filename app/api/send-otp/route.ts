// File: app/api/send-otp/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { contactNumber } = await request.json();

    if (!contactNumber || contactNumber.length < 10) {
      return NextResponse.json({ message: 'Valid contact number is required.' }, { status: 400 });
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Your .env.local file should have: FAST2SMS_API_KEY="YOUR_KEY_HERE"
    const apiKey = process.env.FAST2SMS_API_KEY;

    if (!apiKey) {
      console.error("Fast2SMS API Key is not configured on the server.");
      return NextResponse.json({ message: 'API configuration error.' }, { status: 500 });
    }

    const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "POST",
      headers: {
        "authorization": apiKey,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        variables_values: generatedOtp,
        route: "otp",
        numbers: contactNumber,
      }),
    });

    const result = await response.json();
    if (result.return === false) {
      return NextResponse.json({ message: result.message || "Failed to send OTP." }, { status: 400 });
    }

    // Send the generated OTP back to the frontend
    return NextResponse.json({ success: true, otp: generatedOtp }, { status: 200 });

  } catch (error) {
    console.error("Error in /api/send-otp:", error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}