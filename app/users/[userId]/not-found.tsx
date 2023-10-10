import Link from "next/link";
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="mb-5 text-xl font-semibold">User not found.</div>
      <div className="group px-5 py-4">
        <Link href={"/"} className={`mb-5 text-xl font-semibold`}>
          Home
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </Link>
      </div>
    </main>
  );
}
