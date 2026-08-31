import { useState } from "react";
import ChallengeFrame, {
  FieldError,
  inputClass,
  primaryButtonClass,
} from "../components/ChallengeFrame";

const initialValues = { name: "", email: "", password: "", confirmPassword: "" };

export default function FormValidation() {
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

    if (values.name.trim().length < 2) nextErrors.name = "Enter at least 2 characters.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Enter a valid email.";
    if (values.password.length < 8) nextErrors.password = "Use at least 8 characters.";
    if (values.confirmPassword !== values.password)
      nextErrors.confirmPassword = "Passwords do not match.";

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <ChallengeFrame title="Form Validation" description="Registration form using one state object and field-level errors.">
      <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-lg space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        {submitted && <p role="status" className="rounded-lg bg-green-50 p-3 text-sm text-green-700">Registration successful.</p>}

        {[
          ["name", "Name", "text"],
          ["email", "Email", "email"],
          ["password", "Password", "password"],
          ["confirmPassword", "Confirm password", "password"],
        ].map(([name, label, type]) => (
          <div key={name}>
            <label htmlFor={`register-${name}`} className="mb-1.5 block text-sm font-medium">{label}</label>
            <input
              id={`register-${name}`}
              name={name}
              type={type}
              value={values[name]}
              onChange={handleChange}
              aria-invalid={Boolean(errors[name])}
              className={inputClass}
            />
            <FieldError message={errors[name]} />
          </div>
        ))}

        <button type="submit" className={`${primaryButtonClass} w-full`}>Create account</button>
      </form>
    </ChallengeFrame>
  );
}
