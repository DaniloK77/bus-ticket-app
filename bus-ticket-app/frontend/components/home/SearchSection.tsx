"use client";

import { useState } from "react";
import { CalendarIcon, MapPin, Users } from "lucide-react";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SearchSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="relative z-20 mx-auto -mt-24 max-w-7xl px-6">
      <div className="rounded-[2rem] border border-white/20 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
        <div className="grid gap-4 lg:grid-cols-5">
          {/* FROM */}
          <div className="rounded-2xl border bg-white p-4 transition hover:border-blue-400">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              From
            </p>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-blue-500" />

              <input
                type="text"
                placeholder="City or station"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* TO */}
          <div className="rounded-2xl border bg-white p-4 transition hover:border-blue-400">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              To
            </p>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-blue-500" />

              <input
                type="text"
                placeholder="Destination"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* DATE */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="rounded-2xl border bg-white p-4 text-left transition hover:border-blue-400">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Departure Date
                </p>

                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-5 w-5 text-blue-500" />

                  <span className="text-sm">
                    {date ? format(date, "PPP") : "Pick a date"}
                  </span>
                </div>
              </button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>

          {/* PASSENGERS */}
          <div className="rounded-2xl border bg-white p-4 transition hover:border-blue-400">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Passengers
            </p>

            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-blue-500" />

              <select className="w-full bg-transparent text-sm outline-none">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers</option>
              </select>
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <button className="rounded-2xl bg-blue-600 p-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] hover:bg-blue-700">
            Search Tickets
          </button>
        </div>
      </div>
    </section>
  );
}
