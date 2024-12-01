import { FC, lazy } from "react";

const DataTable = lazy(() => import("../../components/DataTable"));

const UpdateTickets: FC = () => {
  return (
    <div className="mt-32 flex flex-col justify-center mx-auto">
      <h1 className="text-2xl font-bold text-center">Update a Ticket</h1>

      <div className="mt-10 mb-64 p-2">
        <DataTable />
      </div>
    </div>
  );
};

export default UpdateTickets;
