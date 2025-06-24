// lib/sendEmail.ts
import axios from "axios";

export const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
  const apiKey = process.env.SEVEN_API_KEY;

  const params = new URLSearchParams();
  params.append("to", to);
  params.append("from", "noreply@yourdomain.com"); // باید در Seven.io تأیید شود
  params.append("subject", subject);
  params.append("html", html);

  const res = await axios.post("https://gateway.seven.io/api/email", params, {
    headers: {
      Authorization: `Basic ${Buffer.from(apiKey + ":").toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return res.data;
};
