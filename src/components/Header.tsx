
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

type DropItem = { label: string; href: string; id: string };
const NavItem = [
  { id: "nav-home", title: "Home", href: "#home" },
  { id: "nav-products", title: "Products", href: "#products" },
  {
    id: "nav-resources",
    title: "Resources",
    href: "/resources",
    PRODUCTS: [
      {
        label: "Temporary Works",
        href: "/temporary",
        id: "nav-temporary-works",
      },
      {
        label: "Asset Management",
        href: "/products/asset-management",
        id: "nav-asset-management",
      },
      { label: "Logistics", href: "/products/logistics", id: "nav-logistics" },
      {
        label: "Access Control",
        href: "/products/access-control",
        id: "nav-access-control",
      },
      {
        label: "Document Management",
        href: "/products/document-management",
        id: "nav-document-management",
      },
      { label: "Planning", href: "/products/planning", id: "nav-planning" },
    ] as DropItem[],
  },
  { id: "nav-resources", title: "Resources", href: "/resources" },
  { id: "nav-about", title: "About", href: "/about" },
  { id: "nav-signin", title: "Sign in", href: "/signin" },
  { id: "nav-book-demo", title: "Book a Demo", href: "/bookdemo" },
];

function cls(...a: Array<string | false | undefined>) {
  return a.filter(Boolean).join(" ");
}

export default function Header() {
  const [openProducts, setOpenProducts] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Outside-click to close dropdown
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpenProducts(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // Esc to close dropdown
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) =>
      e.key === "Escape" && setOpenProducts(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // Scroll listener for floating button (show after h-screen scroll)
  useEffect(() => {
    const handleScroll = () => {
      // scrollY >= 100vh
      if (window.scrollY >= window.innerHeight) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get Products array safely from NavItem
  const products =
    NavItem.find((item) => item.id === "nav-resources")?.PRODUCTS || [];

  // Floating button target (Home)
  const homeItem = NavItem.find((item) => item.id === "nav-home");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="CoorDeck Technologies"
              id="nav-logo"
            >
              <Image
                src="/images/logo.png"
                alt="CoorDeck Logo"
                width={180}
                height={40}
                className="object-contain"
                priority
              />
            </Link>

            {/* Right group (desktop) */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="relative flex items-center gap-8" ref={menuRef}>
                {/* Products dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    setOpenProducts(true);
                  }}
                  onMouseLeave={() => {
                    timeoutRef.current = setTimeout(() => {
                      setOpenProducts(false);
                    }, 200);
                  }}
                >
                  <button
                    type="button"
                    className={cls(
                      "group inline-flex items-center gap-1 text-[#222222] font-[600] text-[16px]",
                      openProducts
                        ? "text-gray-900"
                        : "text-[#222222] hover:text-gray-900"
                    )}
                    aria-haspopup="menu"
                    aria-expanded={openProducts}
                    onClick={() => setOpenProducts((v) => !v)}
                    id="nav-products-btn"
                  >
                    Products
                    <MdOutlineArrowDropDown
                      className={cls(
                        "transition-transform duration-200 font-[600]",
                        openProducts && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </button>
                  {openProducts && (
                    <div
                      className="absolute left-1/2 z-50 mt-1 w-72 -translate-x-1/2 rounded-xl border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-all duration-200 ease-in-out"
                      role="menu"
                    >
                      <ul className="py-2">
                        {products.map((it) => (
                          <li key={it.href}>
                            <Link
                              href={it.href}
                              className="block px-4 py-2.5 text-[16px] font-[500] text-[#222222] hover:bg-gray-100"
                              role="menuitem"
                              onClick={() => setOpenProducts(false)}
                              id={it.id}
                            >
                              {it.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Other links */}
                {NavItem.filter(
                  (item) =>
                    !item.PRODUCTS &&
                    ![
                      "nav-home",
                      "nav-products",
                      "nav-signin",
                      "nav-book-demo",
                    ].includes(item.id)
                ).map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="inline-flex items-center gap-1 text-[16px] text-[#222222] font-[600] hover:text-gray-900"
                    id={item.id}
                  >
                    {item.title}
                    <MdOutlineArrowDropDown className="opacity-60" />
                  </Link>
                ))}
              </nav>

              {/* CTAs */}
              <div className="flex items-center gap-3">
                {NavItem.filter((item) =>
                  ["nav-signin", "nav-book-demo"].includes(item.id)
                ).map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cls(
                      item.id === "nav-signin"
                        ? "inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm text-[#222] font-[600] hover:bg-gray-50"
                        : "inline-flex items-center rounded-full bg-gray-900 px-4 py-[10px] text-sm font-[600] text-white hover:bg-gray-800"
                    )}
                    id={item.id}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[#222222] font-bold"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              id="nav-hamburger"
            >
              <svg
                width="30"
                height="30"
                color="#000000"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Floating Button (Dynamic Home) */}
      {homeItem && showFloating && (
        <Link href={homeItem.href}>
          <div
            className="fixed bottom-6 right-6 w-12 h-12 p-3 bg-[#00A3E0] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer z-30"
            id={`floating-${homeItem.id}`}
          >
            <Image
              src="/images/last_page_Rounded.png"
              alt="Next"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </Link>
      )}
    </>
  );
}