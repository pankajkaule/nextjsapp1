import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-yellow-800 p-3">
      <div className="flex sm:max-justify-center items-center">
        <Link href="/">
          <div className="pr-4 text-gray-100 	">CompanyName </div>
        </Link>
      </div>
      <div className=" sm:flex ">
        <Link href="/">
          <div className="pr-4 text-gray-100		">Home </div>
        </Link>
        <Link href="/gallery">
          <div className="pr-4 text-gray-100		">Gallery</div>
        </Link>
        <Link href="/about">
          <div className="pr-4 text-gray-100		">About Us</div>
        </Link>
        <Link href="/contacts">
          <div className="pr-4 text-gray-100		">Contacts</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
