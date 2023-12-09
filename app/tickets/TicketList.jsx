import { MongoClient } from "mongodb";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch("http://localhost:3000/api/tickets", {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  return res.json();
}

const TicketList = async () => {
  const tickets = await getData();

  console.log(tickets);

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket?.id} className="card my-5 ">
          <h3>{ticket?.title}</h3>
          <p>{ticket?.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket?.priority.toLowerCase()}`}>
            {ticket?.priority} priority
          </div>
        </div>
      ))}
      {tickets?.length === 0 && (
        <p className="text-center">There are no open tickets, yaaay!</p>
      )}
    </>
  );
};

export default TicketList;
