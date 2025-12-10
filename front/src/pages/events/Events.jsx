// src/components/Events.jsx
import React from "react";

import eventsBg from "../../assets/bg/homeBgEvents.png";

export default function Events() {
  const events = []; 

  return (
    <section
      className="relative w-full min-h-screen text-white"
      style={{
        backgroundImage: `url(${eventsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Top row: tag + heading + search */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-blue-500/60 bg-blue-500/10 px-4 py-1 text-xs tracking-wide uppercase">
              # Events
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Our Most Popular{" "}
              <span className="text-blue-400">Events</span>
            </h2>
          </div>

          {/* Search bar */}
          <div className="flex w-full max-w-md items-center gap-2">
            <input
              type="text"
              placeholder="Search Events..."
              className="w-full rounded-full bg-white/10 px-4 py-2 text-sm outline-none placeholder:text-gray-400 backdrop-blur border border-white/20 focus:border-blue-400"
            />
            <button className="rounded-full px-6 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 transition">
              Search
            </button>
          </div>
        </div>

        {/* Events grid – currently empty */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events.length === 0 && (
            <div className="col-span-full flex items-center justify-center rounded-3xl border border-dashed border-white/20 bg-black/20 py-16 text-sm text-gray-300">
              No events added yet.
            </div>
          )}

          {/* When you have data, map it here:
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          */}
        </div>

        {/* View all button */}
        <div className="mt-12 flex justify-center">
          <button className="rounded-full border border-white/30 bg-white/5 px-10 py-2 text-sm tracking-wide hover:bg-white/10 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
