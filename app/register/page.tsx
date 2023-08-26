import Link from "next/link";
import RegisterForm from "./registerForm";

export default function Register() {
  return (
    <div className="bg-slate-100 w-screen h-screen flex justify-center items-center">
      <div className="sm:shadow-xl px-12 pb-8 pt-12 sm:bg-white rounded-xl w-full sm:w-[500px]">
        <div className="space-y-10">
          <h3 className="text-3xl font-bold text-center mb-10">
            Create Your Account
          </h3>
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
    </div>
  );
}
