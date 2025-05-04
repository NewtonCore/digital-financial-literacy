"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-extrabold text-[#024340] mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mb-2">
        Oops! This page doesn't exist.
      </p>
      <p className="text-gray-500 mb-6">
        The page you're looking for might have been removed or moved.
      </p>
      <Link
        href="/"
        className="bg-[#024340] hover:bg-[#046c59] text-white px-6 py-3 rounded-full font-semibold transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
