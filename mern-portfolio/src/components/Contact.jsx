import { Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="portfolio-section">
      <div className="section-inner contact-panel">
        <p className="section-eyebrow">Have a project in mind?</p>
        <h2>Let’s work together</h2>
        <p className="section-copy">I’m open to opportunities and conversations about web development.</p>
        <a
          className="btn primary-btn contact-button"
          href="https://mail.google.com/mail/?view=cm&to=prashikinfo11%40gmail.com&su=Portfolio%20inquiry"
        >
          <Mail size={18} /> Get in touch
        </a>
      </div>
    </section>
  );
}

export default Contact;
