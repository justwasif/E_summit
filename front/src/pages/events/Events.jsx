// src/pages/Events.jsx  (or wherever you keep pages)
import React from "react";
import eventsBg from "../../assets/bg/homeBgEvents.png"; // <- change to your bg image

export default function Events() {
  // dummy events – same content for layout
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
      {/* dark overlay */}
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-20">
        {/* top row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-400/60 bg-blue-500/10 px-4 py-1 text-xs tracking-[0.2em] uppercase">
              # Events
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              Our Most Popular{" "}
              <span className="text-blue-400">Events</span>
            </h2>
          </div>

          {/* search */}
          <div className="flex w-full max-w-md items-center gap-3">
            <input
              type="text"
              placeholder="Search Events..."
              className="w-full rounded-full bg-white/10 px-4 py-2 text-sm outline-none placeholder:text-gray-400 backdrop-blur border border-white/20 focus:border-blue-400"
            />
            <button className="rounded-full px-6 py-2 text-sm font-medium bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 transition">
              Search
            </button>
          </div>
        </div>

        {/* cards grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => {
            const isHighlighted = index === 4; // middle bottom card

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
                {/* card image area */}
                <div className="h-40 w-full bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-700 flex items-center justify-center">
                  {/* If you have a card image, use this instead:
                      <img src={cardImg} alt={event.title} className="w-full h-full object-cover" />
                  */}
                  <span className="text-5xl"></span>
                </div>

                {/* content */}
                <div className="px-4 pt-4 pb-3 text-xs text-gray-300">
                  <p className="tracking-[0.18em] uppercase text-[0.6rem] text-gray-400 mb-1">
                    {event.type}
                  </p>

                  <h3 className="text-base font-semibold mb-1">
                    Strategy <span className="text-blue-400">Showdown</span>
                  </h3>

                  <p className="text-[0.7rem] leading-snug line-clamp-3">
                    {event.desc}
                  </p>
                </div>

                {/* bottom row */}
                <div className="flex items-center justify-between px-4 pb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span>👥</span>
                    <span>{event.attendees}</span>
                  </div>

                  <button className="text-xs font-semibold rounded-full px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 transition">
                    Register
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* view all */}
        <div className="mt-12 flex justify-center">
          <button className="rounded-full border border-white/30 bg-white/5 px-10 py-2 text-xs tracking-[0.25em] uppercase hover:bg-white/10 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
