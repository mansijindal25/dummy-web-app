/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";

import PhoneInput from "react-phone-number-input";

const Email_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactInputForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const [value, setValue] = React.useState<any | undefined>(undefined);

  const validateContact = (value: string) => {
    if (Email_REGEX.test(value)) {
      return true;
    }
    return "Must be a valid email";
  };

  const onSubmit = (data: any) => {
    console.log("submitted data:", data, value);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
      <label htmlFor="contact">
        Email or Phone Number<sup style={{ color: "red" }}>*</sup>
      </label>
      <input
        id="email"
        type="text"
        autoComplete="username"
        placeholder="Email or +1234567890"
        {...register("email", {
          required: "This field is required",
          validate: validateContact,
        })}
        className="p-2 border w-full rounded my-2"
      />
      {errors.email && typeof errors.email.message === "string" && (
        <div style={{ color: "red", marginBottom: 8 }}>
          {errors.email.message}
        </div>
      )}

      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        className="w-full my-2 p-2 border rounded [&_.PhoneInputInput]:focus:outline-none [&_.PhoneInputInput]:focus:ring-0"
      />

      <button
        type="submit"
        className="border p-2 rounded bg-blue-500 text-white cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
