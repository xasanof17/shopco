"use client";
import Link from "next/link";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export const Banner = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="w-full bg-black py-3">
      <div className="flex-between container">
        <p className="flex-1 text-center text-sm font-normal text-white">
          Sign up and get 20% off to your first order.{" "}
          <Link
            href="/sign-up"
            className="text-sm font-medium underline underline-offset-4"
          >
            Sign Up Now
          </Link>
        </p>
        <button
          onClick={() => setShow((prev) => !prev)}
          type="button"
          className="md:flex-center hidden text-white"
        >
          <MdClose className="h-6 w-6 text-white" />
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};
