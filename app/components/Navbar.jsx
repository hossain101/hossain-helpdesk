import Link from "next/link"


const Navbar = () => {
  return (
    <nav>
    <h1>Help Desk</h1>
    <Link href={"/"}>Dashboard</Link>
    <Link href={"/tickets"}>Tickets</Link>
  </nav>
  )
}

export default Navbar