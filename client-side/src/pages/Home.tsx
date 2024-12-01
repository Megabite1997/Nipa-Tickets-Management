import React from "react";
import TicketNipa from "../assets/nipa/nipa_ticket.webp";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      <section className="relative h-[400px] sm:h-[600px]">
        <img
          src={TicketNipa}
          alt="Ticket"
          className="absolute pt-16 md:pt-0 h-full w-full"
        />

        <div className="absolute bottom-10 sm:bottom-16 left-2/4 transform -translate-x-2/4">
          <NavLink to="create_tickets">
            <Button text="Create a ticket" className="py-4 font-bold"></Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
