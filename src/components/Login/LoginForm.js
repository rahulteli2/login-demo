import React, { useState } from "react";
import { LoginFormValidator } from "./LoginFormValidator";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const onUpdateField = (e) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };

    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const { errors, validateForm, onBlurField } = LoginFormValidator(form);

  const onSubmit = (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert("API is getting called.");
  };
  return (
    <>
      <div className="container">
        <h1 className="">Distribution App</h1>
        <form onSubmit={onSubmit} className="login">
          <div className="col">
            <label className="form-lable">Username</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={form.email}
              onChange={onUpdateField}
              onFocus={onBlurField}
            />
            {errors.email.dirty && errors.email.error ? (
              <p className="error">{errors.email.msg}</p>
            ) : null}
          </div>
          <div className="col my-3">
            <label className="form-lable">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={form.password}
              onChange={onUpdateField}
              onFocus={onBlurField}
            />
            {errors.password.dirty && errors.password.error ? (
              <p className="error">{errors.password.msg}</p>
            ) : null}
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <div className="container my-3">
            <a href="/" className="p-3">
              Sign up?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
