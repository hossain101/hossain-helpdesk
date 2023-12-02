import Image from "next/image";
import Link from "next/link";
import hossain from "./hossain.png";

const Navbar = () => {
  return (
    <nav>
      <Image
        src={hossain}
        alt="Hossain-Pic"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Help Desk</h1>
      
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/tickets"}>Tickets</Link>
    </nav>
  );
};

export default Navbar;
