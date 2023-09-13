import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface pastRecords {
  lunchRecordsId: number;
  optionList: options[];
  finalLocation: string;
  createdDatetime: Date;
}

interface options {
  restaurantName: string;
  locationLink: string;
}

interface RecordTableProps {
  records: pastRecords[];
}

const columns: GridColDef[] = [
  { field: "options", headerName: "Options", flex: 1 },
  { field: "decision", headerName: "Decision", flex: 3 },
  { field: "date", headerName: "Date", flex: 3 },
];

const RecordTableComponent: React.FC<RecordTableProps> = ({ records }) => {
  console.log('waht f', records);
  let rows: any[] = [];

  rows = records.map((rec) => ({

    id: rec.lunchRecordsId,
    options: Array.isArray(rec.optionList)
      ? rec.optionList.map((option) => option.restaurantName).join(", ")
      : "",
    decision: rec.finalLocation,
    date: rec.createdDatetime,
  }));

  console.log("what is record ", rows);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h2>Past Records</h2>
      <DataGrid rows={rows} columns={columns}/>
    </div>
  );
};

export default RecordTableComponent;
