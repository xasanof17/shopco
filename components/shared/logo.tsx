import Link from "next/link";
import Menu from "./menu";

const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
      <Menu />
      <Link href="/" className="flex-center font-integral text-2xl font-bold">
        Shop.co
      </Link>
    </div>
  );
};

export default Logo;
