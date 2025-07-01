import Link from "next/link";
import GoogleLoginButton from "./components/GoogleLoginButton";

export default function Home() {
  return (
    <>
      <section>
        <h1>Home</h1>
        <Link href="/about">About</Link>
      </section>
      <section className="flex flex-col items-center justify-center pt-41">
        <h1 className="font-bold">Google OAuth</h1>
        <GoogleLoginButton />
      </section>
    </>
  );
}
