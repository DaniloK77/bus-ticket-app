"use client";

import { User } from "lucide-react";
import Link from "next/link";

export default function UserButton() {
  const isLoggedIn = false;

  return (
    <Link href="/login" className="relative">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-sm transition hover:bg-gray-50">
        <User className="h-5 w-5 text-gray-700" />
      </div>
    </Link>
  );
}
