import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.target,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((error) => {
      alert("Failed to send message");
      console.error(error);
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
