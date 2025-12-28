'use server'

import { NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(req: Request) {
    const resend  = new Resend(process.env.RESEND_API)
    const { from, subject, message } = await req.json()
    try {
        const { data } = await resend.emails.send({
            from:'noreply@fadestocodes.dev',
            to : ['fadestocodes@gmail.com'],
            subject,
            html: message,
            replyTo:from
        })
        console.log('data from Resend', data)

        const autoReplyHtml = `
            <div style="font-family: sans-serif; font-size: 16px; color: #111; line-height: 1.5;">
            <p>Hi there!</p>
            <p>Thanks for reaching out. I’ve received your message and will get back to you shortly. This is an automated response, so please do not reply to this email, if you need to you can reach me at fadestocodes@gmail.com</p>
            <p>Kind regards,<br/>Andrew</p>
            </div>
        `;
  
        resend.emails.send({
            from: 'noreply@fadestocodes.dev',
            to: from,
            subject: 'Thanks for reaching out!',
            html: autoReplyHtml,
            headers: {
                "X-Priority": "3",             
                "X-Auto-Response-Suppress": "OOF"
              },
        }).then(res => {
            console.log('auto-reply sent', res.data);
        }).catch(err => {
            console.log('auto-reply error', err);
        });

        return NextResponse.json({data, message : 'Email successfully sent'}, {status:200})
    } catch (err){
        console.log('Err is ', err)
        return NextResponse.json({err, message : 'Something went wrong, please try again.'}, {status: 500})
    }
}