/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google?: any;
  }
}

export default function GoogleLoginButton() {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    if (window.google && clientId) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: (response: any) => {
          console.log("✅ OAuth Success! ID Token:", response.credential);
          // You can decode or send it to backend
        },
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-button"),
        { theme: "outline", size: "large" }
      );
    }
  }, []);

  return <div id="google-button" />;
}
