import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import PastRecordTable from "./PastRecordsTable";
import {
  getLunchPastRecords,
  randomizeLunchOptions,
} from "../api/RandomizeLunchAPI";

interface SubmittedOptions {
  options: string;
}

interface options {
  restaurantName: string;
  locationLink: string;
}

interface records {
  lunchRecordsId: number;
  optionList: options[];
  finalLocation: string;
  createdDatetime: Date;
}

const InputOptions: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [values, setValues] = useState<SubmittedOptions[]>([]);
  const [finalLocation, setFinalLocation] = useState<string>("");
  const [records, setRecords] = useState<records[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddValue = () => {
    if (inputValue.trim() !== "") {
      const newValues: SubmittedOptions = {
        options: inputValue,
      };

      setValues([...values, newValues]);
      setInputValue("");
    }
  };

  const handleRemoveValue = (index: number) => {
    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    setValues(updatedValues);
  };

  const handleSubmittedRespose = (res: any) => {
    console.log("Response gotten from BE ", res.data.list.finalLocation);

    if (!res.data.error) {
      setFinalLocation(res.data.list.finalLocation);
    }
    console.log(finalLocation)
  };

  const handleSubmit = async () => {
    if (values.length > 0) {
      try {
        randomizeLunchOptions(handleSubmittedRespose, values);
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  const handleGetResponse = (res: any) => {
    console.log("response", res);

    setRecords(res.data.list);
  };

  React.useEffect(() => {
    getLunchPastRecords(handleGetResponse);
  }, [finalLocation]);


  console.log('what is wrong', finalLocation)

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", py: 1 }}>
        {/* input options */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignContent: "çenter",
            maxWidth: "100%",
          }}
        >
          <Box>
            <TextField
              label="Enter Lunch Options"
              variant="outlined"
              fullWidth
              value={inputValue}
              onChange={handleInputChange}
            />
          </Box>
          <Box sx={{ alignSelf: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddValue}
            >
              Add Options
            </Button>
          </Box>
        </Box>

        {/* Show options inputted */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            my: 1,
          }}
        >
          <Typography variant="h6"> Options Entered </Typography>
          <Box component="ol" sx={{ my: 1 }}>
            {values.map((value, index) => (
              <Box component="li" key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    py: 0.5,
                  }}
                >
                  <Typography variant="body2">{value.options}</Typography>
                  <Box sx={{ mx: 2 }}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleRemoveValue(index)}
                    >
                      <Typography variant="body2">Clear</Typography>
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Submit Button */}
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Randomize
          </Button>
        </Box>

        {/* final Location */}
        <Box sx={{ mt: 2 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: "12px", fontWeight: "Bold" }}
          >
            {`Final Location:  ${finalLocation}`}
          </Typography>
        </Box>

        {/* {records.length > 0 ? <PastRecordTable records={records} /> : ''} */}
      </Box>
    </>
  );
};

export default InputOptions;
