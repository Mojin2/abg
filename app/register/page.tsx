import Link from "next/link";
import RegisterForm from "./registerForm";

export default function Register() {
  return (
    <div className="mt-16 p-4">
      <div className="space-y-10">
        <h3 className="text-3xl font-bold text-center">Create Your Account</h3>
      </div>
      {/* Login Form */}
      <div className="mt-6 px-8 space-y-8">
        <RegisterForm />
        <p className="text-center">
          Have an account?{" "}
          <Link href="/signin" className="text-teal-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
