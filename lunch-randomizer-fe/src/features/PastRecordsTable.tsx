import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from '@mui/material';

interface pastRecords {
  lunchRecordId: number;
  optionsList: options[];
  finalLocation: string;
  createdDateTime: string;
}

interface options {
  restaurantName: string;
  locationLink: string;
}

interface RecordTableProps {
  records: pastRecords[];
}

const columns: GridColDef[] = [
  { field: "options", headerName: "Options", flex: 3 },
  { field: "decision", headerName: "Decision", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
];

const RecordTableComponent: React.FC<RecordTableProps> = ({ records }) => {
//   console.log('waht f', records);

    const rows = records.map((info, index) => ({
        id: info.lunchRecordId,
        options: info.optionsList.map((details, index) => details.restaurantName).join(", "),
        decision : info.finalLocation,
        date: info.createdDateTime
    }))

//   console.log('rows' , rows);

  return (
    <Box sx={{py:1}}>
      <Typography variant = 'h4' sx={{fontWeight: 'bold', fontSize: '20px', mb:1}}>Previous Lunch Record</Typography>
      <DataGrid rows={rows} columns={columns} checkboxSelection/>
    </Box>
  );
};

export default RecordTableComponent;
