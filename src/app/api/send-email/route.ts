import { NextResponse } from 'next/server';
import emailjs from 'emailjs-com';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        console.log(name)
        console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
        console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
        console.log(process.env.NEXT_PUBLIC_EMAILJS_USER_ID)


        let response;
        try {
            response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: name,
                    from_email: email,
                    message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            );
        } catch (error) {
            console.error('Error sending email:', error);
        }


        console.log("eee")

        return NextResponse.json({ success: true, response });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email', details: error }, { status: 500 });
    }
}
