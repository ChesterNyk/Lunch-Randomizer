import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';
import { deletePastLunchOptions, getLunchPastRecords } from '../api/RandomizeLunchAPI';

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

interface clearAll {
    recordsId : string
}

const columns: GridColDef[] = [
  { field: 'options', headerName: 'Options', flex: 3 },
  { field: 'decision', headerName: 'Decision', flex: 1 },
  { field: 'date', headerName: 'Date', flex: 1 },
];

const RecordTableComponent: React.FC<RecordTableProps> = ({ records }) => {
  //   console.log('waht f', records);

  const rows = records.map((info, index) => ({
    id: info.lunchRecordId,
    options: info.optionsList
      .map((details, index) => details.restaurantName)
      .join(', '),
    decision: info.finalLocation,
    date: info.createdDateTime,
  }));

  const [tableData, setTableData] = React.useState(rows);

  //   console.log('rows' , rows);

  const handleRemoveAllRecordsRes = (res: any) => {
    console.log("Response ", res);

    setTableData([]);
  }


  const handleRemoveAllRecords = (rows : any) => {
    console.log('rowsssss ', rows);
    if (rows.length > 0 ) {
        const requestBody : clearAll[] = [];

        rows.forEach((info: any) => {
            const request : clearAll = {
                recordsId : info.id
            };

            requestBody.push(request);
        })

        console.log("request body to delete everything ", requestBody);

        deletePastLunchOptions(handleRemoveAllRecordsRes, requestBody);
    }
  }

  return (
    <Box sx={{ py: 1 }}>
      <Box sx={{display : 'flex', justifyContent: 'space-between', mb:1}}>
        <Typography
          variant='h4'
          sx={{ fontWeight: 'bold', fontSize: '20px', my: 1 }}
        >
          Previous Lunch Record
        </Typography>
        <Button
          variant='contained'
          color='error'
          size='small'
          onClick={() => handleRemoveAllRecords(rows)}
        >
          Clear All
        </Button>
      </Box>
      <DataGrid rows={tableData} columns={columns} checkboxSelection />
    </Box>
  );
};

export default RecordTableComponent;
