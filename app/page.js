import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-zinc-400 justify-center items-center gap-6">
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
    </div>
  );
}
