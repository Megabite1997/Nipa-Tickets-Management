import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import {
  GridColDef,
  GridSortModel,
  GridPaginationModel,
} from "@mui/x-data-grid";
import {
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { getTickets, updateTicket } from "../services/ticketsApi";

const DataGrid = lazy(() =>
  import("@mui/x-data-grid").then((module) => ({
    default: module.DataGrid, // Explicitly select the DataGrid component
  })),
);
const EditDialog = lazy(() => import("./EditDialog"));

const DataTable: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    search: "",
    status: "",
    sortBy: "title",
    order: "asc",
    page: 1,
    limit: 10,
  });
  const [totalRows, setTotalRows] = useState(0);
  const [selectedRow, setSelectedRow] = useState(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await getTickets({
        params: query,
      });

      setData(response.data);
      setTotalRows(response.meta.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear the previous timeout
    }

    timeoutRef.current = setTimeout(() => {
      setQuery((prevQuery) => ({
        ...prevQuery,
        search: event.target.value,
        page: 1,
      }));
    }, 500);
  };

  const handleSortChange = (sortModel: GridSortModel) => {
    if (sortModel.length > 0) {
      const { field, sort } = sortModel[0];
      setQuery({ ...query, sortBy: field, order: sort || "asc" });
    }
  };

  const handlePaginationChange = (paginationModel: GridPaginationModel) => {
    setQuery({
      ...query,
      page: paginationModel.page + 1,
      limit: paginationModel.pageSize,
    });
  };

  const handleLimitChange = (event: SelectChangeEvent<number>) => {
    setQuery({ ...query, limit: Number(event.target.value), page: 1 });
  };

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setQuery({ ...query, status: event.target.value, page: 1 });
  };

  const handleEditClick = (row: any) => {
    setSelectedRow(row); // Store the row data in state
  };

  const handleSave = async (updatedRow: any) => {
    await updateTicket(updatedRow.id, updatedRow); // Update the backend
    fetchData(); // Refresh the table
    setSelectedRow(null); // Close the dialog
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 250 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    {
      field: "contact_information",
      headerName: "Contact Information",
      width: 250,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        const status = params.row.status;
        let color = "gray";
        if (status === "active") color = "green";
        if (status === "inactive") color = "red";
        if (status === "pending") color = "orange";

        return (
          <span
            style={{
              color: "white",
              backgroundColor: color,
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "12px",
            }}
          >
            {status}
          </span>
        );
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          onClick={() => handleEditClick(params.row)}
          color="primary"
          // aria-label="edit"
        >
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <TextField
        label="Search"
        variant="outlined"
        onChange={handleSearch}
        style={{ marginBottom: 16 }}
        fullWidth
      />

      <div className="flex gap-10">
        <div>
          <label className="mr-2">Limit Row</label>
          <Select
            value={query.limit}
            onChange={handleLimitChange}
            style={{ marginBottom: 16, width: 120 }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </div>

        <div>
          <label className="mr-2">Status</label>
          <Select
            value={query.status}
            onChange={handleStatusChange}
            style={{ marginBottom: 16, width: 150 }}
            displayEmpty
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
          </Select>
        </div>
      </div>

      <Suspense fallback={<div>Loading Data Grid...</div>}>
        <DataGrid
          rows={data}
          columns={columns}
          loading={loading}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pagination
          paginationMode="client"
          rowCount={totalRows} // Set total rows from meta
          pageSizeOptions={[5, 10, 20]}
          paginationModel={{ page: query.page - 1, pageSize: query.limit }}
          onPaginationModelChange={handlePaginationChange}
          onSortModelChange={handleSortChange}
        />
      </Suspense>

      {selectedRow && (
        <Suspense fallback={<div>Loading Edit Dialog...</div>}>
          <EditDialog
            selectedRow={selectedRow}
            onClose={() => setSelectedRow(null)}
            onSave={handleSave}
          />
        </Suspense>
      )}
    </Box>
  );
};

export default DataTable;
