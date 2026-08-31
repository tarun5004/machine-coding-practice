import { useState } from "react";
import ChallengeFrame, {
  FieldError,
  inputClass,
  primaryButtonClass,
} from "../components/ChallengeFrame";

const initialValues = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};

    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Enter a valid email.";
    if (!values.subject.trim()) nextErrors.subject = "Subject is required.";
    if (values.message.trim().length < 10)
      nextErrors.message = "Message must have at least 10 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  }

  return (
    <ChallengeFrame title="Contact Form" description="A responsive form with validation and submission feedback.">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto max-w-2xl space-y-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
      >
        {submitted && (
          <p role="status" className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
            Thanks! Your message has been submitted.
          </p>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">Name</label>
            <input id="contact-name" name="name" value={values.name} onChange={handleChange} className={inputClass} />
            <FieldError message={errors.name} />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">Email</label>
            <input id="contact-email" name="email" type="email" value={values.email} onChange={handleChange} className={inputClass} />
            <FieldError message={errors.email} />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium">Subject</label>
          <input id="contact-subject" name="subject" value={values.subject} onChange={handleChange} className={inputClass} />
          <FieldError message={errors.subject} />
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">Message</label>
          <textarea id="contact-message" name="message" rows="5" value={values.message} onChange={handleChange} className={inputClass} />
          <FieldError message={errors.message} />
        </div>

        <button type="submit" className={primaryButtonClass}>Submit message</button>
      </form>
    </ChallengeFrame>
  );
}
