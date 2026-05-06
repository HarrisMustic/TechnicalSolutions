export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-20">
      <div className="w-full max-w-3xl rounded-3xl bg-white p-10 text-center shadow-2xl md:p-14">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-green-500">
          TechnicalSolutions
        </p>

        <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-6xl">
          Thanks for reaching out.
        </h1>

        <p className="mt-8 text-xl leading-9 text-slate-600">
          Your project request was successfully submitted and sent directly to
          my inbox.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-500">
          I’ll review the details and get back to you as soon as possible —
          usually within 24 hours.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left">
          <h2 className="text-lg font-bold text-slate-900">
            What happens next?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• I review your project details and requirements</li>
            <li>• I reach out by email to discuss scope and goals</li>
            <li>• We determine the best technical solution and timeline</li>
          </ul>
        </div>

        <a
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-green-400"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}