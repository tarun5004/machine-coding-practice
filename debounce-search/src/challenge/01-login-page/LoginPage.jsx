import { useState } from "react";
import ChallengeFrame, {
  FieldError,
  inputClass,
  primaryButtonClass,
} from "../components/ChallengeFrame";

const initialValues = { email: "", password: "" };

export default function LoginPage() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};

    if (!values.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email))
      nextErrors.email = "Enter a valid email address.";

    if (!values.password) nextErrors.password = "Password is required.";
    else if (values.password.length < 6)
      nextErrors.password = "Password must have at least 6 characters.";

    setErrors(nextErrors);
    setIsSuccess(Object.keys(nextErrors).length === 0);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setIsSuccess(false);
  }

  return (
    <ChallengeFrame
      title="Login Page"
      description="Controlled inputs, validation, password visibility, and a success state."
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto max-w-md space-y-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
      >
        {isSuccess && (
          <p role="status" className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
            Login successful. Welcome back!
          </p>
        )}

        <div>
          <label htmlFor="login-email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            className={inputClass}
          />
          <FieldError message={errors.email} />
        </div>

        <div>
          <label htmlFor="login-password" className="mb-1.5 block text-sm font-medium">
            Password
          </label>
          <div className="flex gap-2">
            <input
              id="login-password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              placeholder="Minimum 6 characters"
              aria-invalid={Boolean(errors.password)}
              className={inputClass}
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="rounded-lg border border-slate-300 px-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <FieldError message={errors.password} />
        </div>

        <button type="submit" className={`${primaryButtonClass} w-full`}>
          Login
        </button>
      </form>
    </ChallengeFrame>
  );
}
