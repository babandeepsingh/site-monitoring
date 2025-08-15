import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAlert(websiteId:any, url:any) {
  await resend.emails.send({
    from: 'alerts@yourapp.com',
    to: 'user@example.com',
    subject: `🚨 Website Down: ${url}`,
    html: `<p>Your site <strong>${url}</strong> appears to be down.</p>`,
  });
}
