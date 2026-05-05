import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import CartButton from "./CartButton";
import UserButton from "./UserButton";
const navLinks = [
  { href: "/rent-a-bus", label: "Rent a bus" },
  { href: "/bus-stations", label: "Bus stations" },
  { href: "/carriers", label: "Carriers" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          BusTicket
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <CartButton />

          <UserButton />
        </div>
      </nav>
    </header>
  );
}
