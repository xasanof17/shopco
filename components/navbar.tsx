import Link from "next/link";
import Logo from "./shared/logo";
import { NavbarForm } from "./shared/navbar-form";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { Banner } from "@/app/_components/banner";
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <header className="sticky left-0 top-0 w-full bg-white z-50">
      <Banner />
      <nav className="flex-between container space-x-5 py-4 lg:space-x-10">
        <Logo />
        <ul className="hidden items-center space-x-6 lg:flex">
          <li>
            <Link href={"/"}>Shop</Link>
          </li>
          <li>
            <Link href={"/"}>On sale</Link>
          </li>
          <li>
            <Link href={"/"}>New Arrivals</Link>
          </li>
          <li>
            <Link href={"/"}>Brands</Link>
          </li>
        </ul>
        <NavbarForm />
        <div className="flex items-center space-x-5">
          <Link href="/" className="md:hidden flex">
            <FiSearch className="h-6 w-6 text-black" />
          </Link>
          <Link href="/">
            <LuShoppingCart className="h-6 w-6 text-black" />
          </Link>
          <Link href="/">
            <FaRegCircleUser className="h-6 w-6 text-black" />
          </Link>
        </div>
      </nav>
    </header>
  );
};
