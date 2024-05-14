import Image from "next/image";
import Logo from "../../../../public/assets/images/logo.png";
import { FC } from "react";
import { HamburgerIcon } from "@mwl/components/atoms/Icons";

const Navbar: FC = () => {
  return (
    <nav className="w-full p-4 bg-transparent sticky top-0 backdrop-blur-lg">
      <div className="w-full flex items-center justify-between">
        <Image width={175} src={Logo} alt="meowl-logo" />
        <button
          id="nav-toggle-mobile"
          className="w-full h-full max-w-10 max-h-8 py-3.5 border border-white rounded-lg flex items-center justify-center"
        >
          <HamburgerIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
