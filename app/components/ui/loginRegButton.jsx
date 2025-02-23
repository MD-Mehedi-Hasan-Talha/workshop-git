
import Link from "next/link";

export default function LoginRegButton() {
  return (
    <div className="flex w-screen bg-zinc-400 gap-4 items-center justify-end">
      <Link
        href="/login"
        className="bg-teal-500 text-whit px-4 py-2 text-lg rounded-md shadow-sm"
      >
        Login
      </Link>
      <Link
        href="/sign-up"
        className="bg-purple-500 text-whit px-4 py-2 text-lg rounded-md shadow-sm"
      >
        Sign-up
      </Link>
      <Link
        href="/about"
        className="bg-teal-500 text-whit px-4 py-2 text-lg rounded-md shadow-sm"
      >
        About
      </Link>
    </div>
  );
}

