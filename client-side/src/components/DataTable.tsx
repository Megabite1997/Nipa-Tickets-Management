import React, { useState, useEffect } from "react";
import {
  DataGrid,
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
} from "@mui/material";
import { getTickets } from "../services/ticketsApi";

const DataTable: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    search: "",
    // status: "pending",
    sort: "name",
    order: "asc",
    page: 1,
    limit: 10,
  });

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await getTickets({
        params: query,
      });

      console.log("response :", response);

      setData(response); // Adjust based on your API response structure
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
    setQuery({ ...query, search: event.target.value, page: 1 });
  };

  const handleSortChange = (sortModel: GridSortModel) => {
    if (sortModel.length > 0) {
      const { field, sort } = sortModel[0];
      setQuery({ ...query, sort: field, order: sort || "asc" });
    }
  };

  const handlePaginationChange = (paginationModel: GridPaginationModel) => {
    setQuery({
      ...query,
      page: paginationModel.page + 1, // API uses 1-based index
      limit: paginationModel.pageSize,
    });
  };

  const handleLimitChange = (event: SelectChangeEvent<number>) => {
    setQuery({ ...query, limit: Number(event.target.value), page: 1 });
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
      <Select
        value={query.limit}
        onChange={handleLimitChange}
        style={{ marginBottom: 16, width: 120 }}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
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
        pageSizeOptions={[5]}
        // pagination
        // paginationMode="server"
        // paginationModel={{ page: query.page - 1, pageSize: query.limit }}
        onPaginationModelChange={handlePaginationChange}
        onSortModelChange={handleSortChange}
      />
    </Box>
  );
};

export default DataTable;
