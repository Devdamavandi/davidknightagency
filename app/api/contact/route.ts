import { NextResponse } from "next/server";
import { Resend } from "resend";



const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    
    try {
        const { name, email, message } = await req.json()
    
        await resend.emails.send({
            from: "Agency Contact Section <onboarding@resend.dev>",
            to: "developer@davidknightofficial.com",
            subject: `New Inquiry from ${name}`,
            text:  `
    Name: ${name}
    Email: ${email}
    
    Message:
    ${message}
          `
        })
    
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 500 })
    }
}