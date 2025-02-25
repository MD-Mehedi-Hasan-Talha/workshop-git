import Link from "next/link";

export default function LoginRegButton() {
  return (
    <div className="flex gap-6">
      <Link
        href="/login"
        className="text-white  px-8 py-3 text-lg "
      >
        Login
      </Link>
      <Link
        href="/sign-up"
        className="text-white   px-8 py-3 text-lg "
      >
        Sign-up
      </Link>
    </div>
  );
}
