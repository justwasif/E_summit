import React from "react";
import eventsBg from "../../assets/bg/homeBgEvents.png";

export default function Events() {
  const events = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    title: "Strategy Showdown",
    type: "Speaker Session",
    desc: "Some text explaining about this event very briefly in three lines not more than neither less.",
    attendees: "1.2k",
  }));

  return (
    <section
      className="relative w-full min-h-screen text-white"
      style={{
        backgroundImage: `url(${eventsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-20">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between mb-8 sm:mb-12">
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-400/60 bg-blue-500/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs tracking-[0.2em] uppercase">
              # Events
            </span>

            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
              Our Most Popular{" "}
              <span className="text-blue-400">Events</span>
            </h2>
          </div>

          {/* Search */}
          <div className="flex w-full md:max-w-md items-center gap-2 sm:gap-3">
            <input
              type="text"
              placeholder="Search Events..."
              className="w-full rounded-full bg-white/10 px-3 sm:px-4 py-2 text-xs sm:text-sm outline-none placeholder:text-gray-400 backdrop-blur border border-white/20 focus:border-blue-400"
            />
            <button className="rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 transition whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.map((event, index) => {
            const isHighlighted = index === 4;

            return (
              <div
                key={event.id}
                className={`relative rounded-3xl overflow-hidden border bg-white/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2
                  ${
                    isHighlighted
                      ? "border-blue-400 bg-gradient-to-b from-blue-500/40 to-blue-700/40"
                      : "border-white/10"
                  }
                `}
              >
                {/* Card image area */}
                <div className="h-32 sm:h-40 w-full bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-700 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl"></span>
                </div>

                {/* Content */}
                <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2 sm:pb-3 text-xs text-gray-300">
                  <p className="tracking-[0.18em] uppercase text-[0.55rem] sm:text-[0.6rem] text-gray-400 mb-1">
                    {event.type}
                  </p>

                  <h3 className="text-sm sm:text-base font-semibold mb-1">
                    Strategy <span className="text-blue-400">Showdown</span>
                  </h3>

                  <p className="text-[0.65rem] sm:text-[0.7rem] leading-snug line-clamp-3">
                    {event.desc}
                  </p>
                </div>

                {/* Bottom row */}
                <div className="flex items-center justify-between px-3 sm:px-4 pb-3 sm:pb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span>👥</span>
                    <span>{event.attendees}</span>
                  </div>

                  <button className="text-[10px] sm:text-xs font-semibold rounded-full px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 transition">
                    Register
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <button className="rounded-full border border-white/30 bg-white/5 px-8 sm:px-10 py-2 text-[10px] sm:text-xs tracking-[0.25em] uppercase hover:bg-white/10 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}