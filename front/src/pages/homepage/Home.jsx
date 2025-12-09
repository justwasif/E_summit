import bgImage from "../../assets/bg/homeBgMain.png";




export default function Home() {
  const stats = [
    "Participants Every Year",
    "Participants Every Year",
    "Participants",
    "Participants",
    "Participants",
    "Participants",
  ];

  return (
    <div className="w-screen bg-black text-white">
      {/* HERO POSTER */}
      <section className="relative w-full flex justify-center">
        {/* The poster image itself */}
        <img
          src={bgImage}
          alt="Transcending the Paradigm"
          className="w-full max-w-5xl h-auto block"
        />

        {/* Text & stats overlayed on top of the image */}
        <div className="absolute inset-0 flex flex-col items-center px-4 pt-24 pb-10 gap-12">
          {/* TOP TEXT BLOCK */}
          <div className="space-y-5 text-center max-w-3xl">
            <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-slate-200">
              BREAKING SYSTEMS. REWRITING INNOVATION
            </p>

            <div className="space-y-2 leading-tight">
              <p className="text-3xl md:text-5xl font-light tracking-[0.4em] uppercase">
                TRANSCENDING
              </p>
              <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-sky-200">
                THE
              </p>
              <p className="text-3xl md:text-5xl font-light tracking-[0.4em] uppercase">
                PARADIGM
              </p>
            </div>

            <p className="text-[10px] md:text-xs text-slate-200/90">
              India&apos;s flagship entrepreneurship summit uniting creators and
              founders to challenge limits and build the future.
            </p>

            <p className="text-[11px] md:text-sm font-semibold tracking-[0.25em] uppercase">
              6<span className="align-super text-[0.55em]">th</span> – 8
              <span className="align-super text-[0.55em]">th</span> February
              2026
            </p>

            <div className="flex items-center justify-center gap-3 pt-1">
              <button className="px-5 py-1.5 rounded-full border border-slate-200/80 bg-black/40 text-[10px] font-semibold uppercase tracking-[0.2em] hover:bg-slate-100/10 transition">
                Tickets
              </button>
              <button className="px-5 py-1.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-[10px] font-semibold uppercase tracking-[0.2em] shadow-lg shadow-blue-500/40 hover:brightness-110 transition">
                Register
              </button>
            </div>
          </div>

          {/* STATS SECTION – sits over the lower part of image */}
          <div className="w-full max-w-4xl space-y-4 text-[11px] md:text-sm">
            <div className="flex justify-between">
              <Stat label={stats[0]} align="left" />
              <Stat label={stats[1]} align="right" />
            </div>
            <div className="flex justify-between">
              <Stat label={stats[2]} align="left" />
              <Stat label={stats[3]} align="right" />
            </div>
            <div className="flex justify-between">
              <Stat label={stats[4]} align="left" />
              <Stat label={stats[5]} align="right" />
            </div>
          </div>
        </div>
      </section>

      {/* EXTRA CONTENT BELOW (so you can keep scrolling after the poster) */}
      <section className="bg-slate-950 text-slate-100 py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">About the Summit</h2>
          <p className="text-sm md:text-base text-slate-200/90">
            Add your sections here (events, speakers, partners, etc.). The page
            is fully scrollable and the hero image above keeps its full width
            like the design.
          </p>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, align = "left" }) {
  const isLeft = align === "left";

  return (
    <div
      className={`flex items-center gap-2 md:gap-3 ${
        isLeft ? "" : "flex-row-reverse text-right"
      }`}
    >
      <div
        className={`h-[2px] w-12 md:w-20 bg-gradient-to-${
          isLeft ? "r" : "l"
        } from-sky-400 to-transparent`}
      />
      <p className="font-semibold">
        <span className="text-lg md:text-xl font-bold mr-1">15K+</span>
        <span className="text-slate-100">{label}</span>
      </p>
    </div>
  );
}
