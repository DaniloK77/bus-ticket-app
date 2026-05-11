"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SearchSection from "@/components/home/SearchSection";

export default function HomePage() {
  return (
    <main>
      <section className="relative h-[72vh] w-full overflow-hidden">
        {/* Background */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/bus.jpg"
            alt="Bus"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20" />

        {/* Blur circle */}
        <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400" />

              <p className="text-sm font-medium text-white/90">
                Trusted by modern travelers
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl"
            >
              Book bus tickets
              <span className="block text-blue-400">faster & smarter</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-gray-300"
            >
              Compare routes, discover destinations, and reserve your next trip
              in minutes with our modern booking platform.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.03] hover:bg-blue-700">
                Book Ticket
              </button>
              <button className="rounded-2xl bg-white-600 px-8 py-4 font-semibold text-white shadow-lg  transition-all hover:scale-[1.03] hover:bg-blue-700">
                Avaible tickets
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-14 flex flex-wrap gap-6"
            ></motion.div>
          </div>
        </div>
      </section>
      <SearchSection />
    </main>
  );
}
