export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-black text-green-400">Request Sent</h1>

        <p className="mt-6 text-xl leading-8 text-slate-300">
          Thanks for reaching out. I received your request and will get back to
          you soon.
        </p>

        <a
          href="/"
          className="mt-10 inline-block rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-400"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}