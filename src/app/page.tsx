import Link from "next/link";
import GoogleLoginButton from "./components/GoogleLoginButton";
import OTPInputField from "./components/OTPInputField";
import EmailNumberInput from "./components/EmailNumberInput";

export default function Home() {
  return (
    <>
      <section>
        <h1>Home</h1>
        <Link href="/about">About</Link>
      </section>
      <section className="flex flex-col items-center justify-center pt-10">
        <OTPInputField />
        <h1 className="font-bold">Google OAuth</h1>
        <GoogleLoginButton />
        <EmailNumberInput />
      </section>
    </>
  );
}
