import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_dWHFUYaw_4N7z8io87ZMc7DoYtCRbyi8d');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { isim, telefon, email, konu, mesaj } = body;

    const { data, error } = await resend.emails.send({
      from: 'İletişim Formu <onboarding@resend.dev>',
      to: ['av.suoyku@gmail.com'],
      replyTo: email,
      subject: `🔔 Yeni İletişim: ${konu} | ${isim}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #0891b2; border-bottom: 3px solid #0891b2; padding-bottom: 10px;">
              📧 Yeni İletişim Formu Mesajı
            </h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #0e7490;">👤 Ad Soyad:</strong> ${isim}</p>
              <p style="margin: 10px 0;"><strong style="color: #0e7490;">📞 Telefon:</strong> <a href="tel:${telefon}">${telefon}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #0e7490;">✉️ Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #0e7490;">📋 Konu:</strong> ${konu}</p>
            </div>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0891b2; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #0e7490;">💬 Mesaj:</strong></p>
              <p style="margin: 0; white-space: pre-wrap; color: #374151;">${mesaj}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
              <p>Bu mesaj <strong>CTİ Avukatlık & Hukuk Danışmanlığı</strong> web sitesi iletişim formundan gönderildi.</p>
              <p>Gönderim Zamanı: ${new Date().toLocaleString('tr-TR')}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend hatası:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Email gönderim hatası:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

