"use client";

import { useRef, useState } from "react";

export default function OTPInputField() {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleSubmit = () => {
    console.log("Entered OTP:", otp.join(""));
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <div className="flex gap-2">
        {otp.map((digit, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            ref={(el) => {
              inputRefs.current[i] = el;
            }}
            className="w-10 h-10 text-xl text-center border border-gray-400 rounded"
          />
        ))}
      </div>
      <button className="btn btn-primary mt-4" onClick={handleSubmit}>
        Submit OTP
      </button>
    </div>
  );
}
