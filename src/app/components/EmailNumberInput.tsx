/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";

// import PhoneInput from "react-phone-number-input";

export default function ContactInputForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  // const [value, setValue] = React.useState<any | undefined>(undefined);

  const validateContact = (value: string) => {
    const Email_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Phone_Regex = /^\+?[1-9]\d{7,14}$/;

    if (Email_REGEX.test(value)) {
      return true;
    }

    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length === 10 && Phone_Regex.test(value)) {
      return true;
    }

    return "Please enter a valid email or phone number";
  };

  const onSubmit = (data: any) => {
    console.log("submitted data:", data);

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact);
    const isPhone = /^\+?[1-9]\d{7,14}$/.test(data.contact);

    if (isEmail) {
      console.log("User entered an email:", data.contact);
    } else if (isPhone) {
      console.log("User entered a phone number:", data.contact);
    } else {
      console.log("Invalid input");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
      <label htmlFor="contact">
        Email or Phone Number<sup style={{ color: "red" }}>*</sup>
      </label>
      <input
        id="contact"
        type="text"
        autoComplete="username"
        placeholder="Email or +1234567890"
        {...register("contact", {
          required: "This field is required",
          validate: validateContact,
        })}
        className="p-2 border w-full rounded my-2"
      />
      {errors.contact && typeof errors.contact.message === "string" && (
        <div style={{ color: "red", marginBottom: 8 }}>
          {errors.contact.message}
        </div>
      )}

      {/* <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        className="w-full my-2 p-2 border rounded [&_.PhoneInputInput]:focus:outline-none [&_.PhoneInputInput]:focus:ring-0"
      /> */}

      <button
        type="submit"
        className="border p-2 rounded bg-blue-500 text-white cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
