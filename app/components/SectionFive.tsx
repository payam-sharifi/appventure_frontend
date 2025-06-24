import { sendSMS } from "@/services/sendSms";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function SectionFive() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const input = formData.get("email")?.toString().trim() || "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{6,14}$/; // شماره بین‌المللی با پیش‌شماره + (مثل آلمان)

    if (!emailRegex.test(input) && !phoneRegex.test(input)) {
     setSuccess("")
      setError("Bitte geben Sie eine gültige E-Mail-Adresse oder Telefonnummer ein. Telefonnummern müssen die Landesvorwahl enthalten, z. B. +49.");
    
      // toast.success("Bitte geben Sie die Werte korrekt ein.")
      return;
    }

    const res = await sendSMS("+4917632136223", input);
   if(res.succes){
    setError("")
    setSuccess("Vielen Dank, unsere Kollegen werden sich in Kürze mit Ihnen in Verbindung setzen.")
   // toast.success("Vielen Dank, unsere Kollegen werden sich in Kürze mit Ihnen in Verbindung setzen.")
   }
  };

  return (
    <section id="five" className="wrapper style2 special fade">
      <div className="container">
        <header>
          <h2>Bereit für Ihre digitale Transformation?</h2>
          <p>Kostenlose Beratung durch unsere Digitalexperten</p>
        </header>
        <form method="post" onSubmit={handleSubmit} className="cta">
          <div className="row gtr-uniform gtr-50">
            <div className="col-8 col-12-xsmall">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Ihre Geschäfts-E-Mail oder Telefonnummer"
                required
              />
              {error && (
                <p style={{ color: "black", marginTop: "0.2rem" }}>{error}</p>
              )}
                {success && (
                <p style={{ color: "green", marginTop: "0.2rem" }}>{success}</p>
              )}
            </div>
            <div className="col-4 col-12-xsmall">
              <input
                type="submit"
                value="Jetzt starten"
                className="fit primary"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
