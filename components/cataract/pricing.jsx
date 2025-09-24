export default function Pricing() {
  const green = "#386641";
  const cream = "#fefae0";

  return (
    <section id="cost">
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8 items-start">
        <div
          className="rounded-3xl border p-6 shadow-sm"
          style={{ backgroundColor: cream }}
        >
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: '"Bona Nova", serif' }}
          >
            Transparent LASIK Pricing
          </h2>
          <p className="mt-2 text-slate-700">
            Get a personalised quote after your eye evaluation. EMI options
            available.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="rounded-2xl border p-4"
              style={{ backgroundColor: cream }}
            >
              <p
                className="font-semibold"
                style={{ fontFamily: '"Bona Nova", serif' }}
              >
                Standard LASIK
              </p>
              <p className="text-sm text-slate-700">
                For suitable corneas, quick recovery
              </p>
              <a
                href="#eligibility"
                className="mt-2 inline-block font-semibold"
                style={{ color: green }}
              >
                Check Suitability
              </a>
            </div>
            <div
              className="rounded-2xl border p-4"
              style={{ backgroundColor: cream }}
            >
              <p
                className="font-semibold"
                style={{ fontFamily: '"Bona Nova", serif' }}
              >
                Contoura / Topography-Guided
              </p>
              <p className="text-sm text-slate-700">
                Enhanced night vision & quality
              </p>
              <a
                href="#eligibility"
                className="mt-2 inline-block font-semibold"
                style={{ color: green }}
              >
                See if You Qualify
              </a>
            </div>
          </div>
          <a
            href="#eligibility"
            className="mt-6 inline-block rounded-2xl text-white font-semibold px-5 py-3"
            style={{ backgroundColor: green }}
          >
            Get Cost Estimate
          </a>
        </div>
        <div
          className="rounded-3xl border p-6"
          style={{ backgroundColor: cream }}
        >
          <h3
            className="text-xl font-bold"
            style={{ fontFamily: '"Bona Nova", serif' }}
          >
            How It Works
          </h3>
          <ol className="mt-4 space-y-3 text-slate-800">
            <li>
              <span className="font-semibold">1.</span> Consultation & detailed
              eye tests
            </li>
            <li>
              <span className="font-semibold">2.</span> 15-minute painless
              procedure
            </li>
            <li>
              <span className="font-semibold">3.</span> Next-day follow-up &
              clear vision
            </li>
          </ol>
          <div
            className="mt-6 rounded-2xl p-4 border"
            style={{ backgroundColor: cream }}
          >
            <p className="text-sm">
              <span className="font-semibold">FAQs:</span> Is it painful? — No,
              numbing drops are used. When can I work? — Usually within 24–48
              hours. Is it permanent? — Yes, results are long-lasting for
              suitable candidates.
            </p>
            <a
              href="#eligibility"
              className="mt-2 inline-block font-semibold"
              style={{ color: green }}
            >
              Get Your Free Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
