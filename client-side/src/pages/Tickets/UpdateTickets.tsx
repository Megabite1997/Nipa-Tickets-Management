import React, { FC } from "react";
import DataTable from "../../components/DataTable";
import EnhancedTable from "../../components/MuiTest/TableGrid";

interface UpdateTicketsProps {}

const UpdateTickets: FC<UpdateTicketsProps> = ({}) => {
  return (
    <div className="mt-32 flex flex-col justify-center mx-auto">
      <h1 className="text-2xl font-bold text-center">Update a Ticket</h1>

      <div className="mt-10  mb-64 p-2">
        {/* <EnhancedTable /> */}
        <DataTable />
      </div>
    </div>
  );
};

export default UpdateTickets;
