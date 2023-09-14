import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Divider, Typography } from '@mui/material';
import PastRecordTable from './PastRecordsTable';
import {
  getLunchPastRecords,
  randomizeLunchOptions,
} from '../api/RandomizeLunchAPI';

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
  const [inputValue, setInputValue] = useState<string>('');
  const [values, setValues] = useState<SubmittedOptions[]>([]);
  const [finalLocation, setFinalLocation] = useState<string>('');
  const [records, setRecords] = useState<records[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddValue = () => {
    if (inputValue.trim() !== '') {
      const newValues: SubmittedOptions = {
        options: inputValue,
      };

      setValues([...values, newValues]);
      setInputValue('');
    }
  };

  const handleRemoveValue = (index: number) => {
    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    setValues(updatedValues);
  };

  const handleSubmittedRespose = (res: any) => {
    console.log('Response gotten from BE ', res.data.list.finalLocation);

    if (!res.data.error) {
      setFinalLocation(res.data.list.finalLocation);
    }
    console.log(finalLocation);
  };

  const handleSubmit = async () => {
    if (values.length > 0) {
      try {
        randomizeLunchOptions(handleSubmittedRespose, values);
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    }
  };

  const handleGetResponse = (res: any) => {
    console.log('response', res);

    setRecords(res.data.list);
  };

  React.useEffect(() => {
    getLunchPastRecords(handleGetResponse);
  }, [finalLocation]);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', py: 0.5 }}>
        {/* input options */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant='h6' sx={{fontWeight: 'bold', mb:1}}>Enter Lunch Options</Typography>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <TextField
              label='Lunch Options'
              variant='outlined'
              value={inputValue}
              onChange={handleInputChange}
              sx={{ width: '50%' }}
            />
            <Button
              variant='contained'
              color='primary'
              onClick={handleAddValue}
              size='medium'
              sx={{ ml: 2, fontSize: '12px', alignSelf: 'center' }} // Adjust margin to create space between the text field and button
            >
              Add Options
            </Button>
          </Box>
        </Box>

        <Divider sx={{ py: 1 }} />

        {/* Show options inputted */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            my: 1,
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Typography variant='h6' sx={{fontWeight: 'bold'}}> Options Entered </Typography>
            <Button variant='contained' color='secondary' size='small' onClick={handleSubmit} sx={{mx: 2}}>
              Randomize
            </Button>
          </Box>
          <Box component='ol' sx={{ my: 1 }}>
            {values.map((value, index) => (
              <Box component='li' key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: 0.5,
                  }}
                >
                  <Typography variant='body1' sx={{fontSize : '24px'}}>{value.options}</Typography>
                  <Box sx={{ mx: 2 }}>
                    <Button
                      variant='outlined'
                      color='secondary'
                      size='medium'
                      onClick={() => handleRemoveValue(index)}
                    >
                      Clear
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ py: 1 }} />

        {/* final Location */}
        <Box sx={{ mt: 1 }}>
          <Typography
            variant='h5'
            sx={{fontWeight: 'Bold'}}
          >
            {`Final Location:  ${finalLocation}`}
          </Typography>
        </Box>

        <Divider sx={{ py: 1 }} />

        {/* <PastRecordTable records={records} />  */}
      </Box>
    </>
  );
};

export default InputOptions;
