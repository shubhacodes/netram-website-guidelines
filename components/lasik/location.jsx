export default function Location() {
  const green = "#386641";
  const cream = "#fefae0";

  return (
    <section id="location">
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: '"Bona Nova", serif' }}
          >
            Easy to Reach
          </h2>
          <p className="mt-2 text-slate-700">
            Located in the heart of Delhi with convenient access from all major
            areas.
          </p>
          <div
            className="mt-4 rounded-2xl border p-4"
            style={{ backgroundColor: cream }}
          >
            <p
              className="font-semibold"
              style={{ fontFamily: '"Bona Nova", serif' }}
            >
              Netram Eye Centre
            </p>
            <p className="text-sm text-slate-700">
              Add exact address here · Parking available
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="tel:+911234567890"
              className="px-5 py-3 rounded-2xl text-white font-semibold"
              style={{ backgroundColor: green }}
            >
              Call Now
            </a>
            <a
              href="#eligibility"
              className="px-5 py-3 rounded-2xl border font-semibold"
              style={{ backgroundColor: cream }}
            >
              Book Free Consultation
            </a>
            <a
              href="#cost"
              className="px-5 py-3 rounded-2xl border font-semibold"
              style={{ backgroundColor: cream }}
            >
              Explore Packages
            </a>
          </div>
        </div>
        <div
          className="aspect-[4/3] rounded-3xl border flex items-center justify-center text-slate-600"
          style={{ backgroundColor: cream }}
        >
          <span>Map Embed Placeholder</span>
        </div>
      </div>
    </section>
  );
}
