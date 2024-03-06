import { IoSearchOutline } from "react-icons/io5";

export const NavbarForm = () => {
  return (
    <div className="hidden md:flex flex-1 items-center space-x-3 rounded-full border border-slate-200 bg-[#F0F0F0] px-4 py-3">
      <button>
        <IoSearchOutline className="h-6 w-6 text-slate-700" />
      </button>
      <input
        type="text"
        className="flex-1 border-none bg-transparent outline-none"
        placeholder="Search for products"
      />
    </div>
  );
};
