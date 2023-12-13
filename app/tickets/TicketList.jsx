import Link from "next/link";
import notFound from "../not-found";

async function getTickets() {
  const res = await fetch(
    "http://localhost:3000/api/tickets/get" ||
      "https://hossain-helpdesk.onrender.com/api/tickets/get",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return notFound();

  return res.json();
}

const TicketList = async () => {
  const tickets = await getTickets();

  // console.log(tickets);

  return (
    <>
      {tickets?.map((ticket) => (
        <div key={ticket?.id} className="card my-5 ">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket?.title}</h3>
            <p>{ticket?.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket?.priority.toLowerCase()}`}>
              {ticket?.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets?.length === 0 && (
        <p className="text-center">There are no open tickets, yaaay!</p>
      )}
    </>
  );
};

export default TicketList;
