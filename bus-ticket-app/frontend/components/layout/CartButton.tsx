"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartButton() {
  const itemCount = 0;

  return (
    <Link href="/cart" className="relative">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-sm transition hover:bg-gray-50">
        <ShoppingCart className="h-5 w-5 text-gray-700" />
      </div>

      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
