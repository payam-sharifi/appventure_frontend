// lib/sendSMS.ts
import axios from "axios";

export const sendSMS = async (to: string, text: string) => {
  const apiKey = process.env.SEVEN_API_KEY;

  const params = new URLSearchParams();
  params.append("to", to); // شماره تلفن با کد کشور مثل: +49123456789
  params.append("text", text);
  params.append("from", "hengamehBeauty"); // این رو باید در Sender IDs تایید شده باشه
  params.append('p', "argJCvuWyyxfXFFVFDTa5TkZPIpta0cjaueRF28IFsN4DUDYrAmjEKsBOstmrpRg"); 
  // SEVEN_API_KEY=argJCvuWyyxfXFFVFDTa5TkZPIpta0cjaueRF28IFsN4DUDYrAmjEKsBOstmrpRg
  // SEVEN_SENDER=hengamehBeauty
  const res = await axios.post("https://gateway.seven.io/api/sms", params, {
    headers: {
      Authorization: `Basic ${Buffer.from(apiKey + ":").toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return res.data;
};
