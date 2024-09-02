import React, { useState } from 'react';
import { Container, Typography, TextField, MenuItem, Button, Grid, FormControl, InputLabel, Select, FormHelperText } from '@mui/material';
import styles from './ElectricityBill.module.css'; // Import the CSS module

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const boards = {
  'Andhra Pradesh': ['APEPDCL', 'APTRANSCO'],
  'Arunachal Pradesh': ['APDCL'],
  'Assam': ['APDCL'],
  'Bihar': ['BSEB'],
  'Chhattisgarh': ['CSPDCL'],
  'Goa': ['GSEDCL'],
  'Gujarat': ['PGVCL', 'MEPDCL', 'DGVCL', 'UGVCL'],
  'Haryana': ['UHBVN', 'DHBVN'],
  'Himachal Pradesh': ['HPSEB'],
  'Jharkhand': ['JSEB'],
  'Karnataka': ['BESCOM', 'HESCOM', 'CESCOM', 'GESCOM'],
  'Kerala': ['KSEB'],
  'Madhya Pradesh': ['MPEB'],
  'Maharashtra': ['MSEDCL', 'BEST', 'Tata Power'],
  'Manipur': ['MSC'],
  'Meghalaya': ['MeECL'],
  'Mizoram': ['MZP'],
  'Nagaland': ['NSE'],
  'Odisha': ['CESU', 'WESCO', 'NESCO', 'SOUTHCO'],
  'Punjab': ['PSPCL'],
  'Rajasthan': ['JVVNL', 'AVVNL', 'JDVVNL'],
  'Sikkim': ['Sikkim Power'],
  'Tamil Nadu': ['TNEB', 'TANGEDCO'],
  'Telangana': ['TSGENCO', 'TSTRANSCO', 'TSSPDCL', 'TSNPDCL'],
  'Tripura': ['TSECL'],
  'Uttar Pradesh': ['UPPCL'],
  'Uttarakhand': ['UERC'],
  'West Bengal': ['WBSEDCL', 'CESC']
};

const ElectricityBill = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [consumerId, setConsumerId] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedBoard('');
  };

  const handleBoardChange = (event) => {
    setSelectedBoard(event.target.value);
  };

  const handleConsumerIdChange = (event) => {
    setConsumerId(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('State:', selectedState);
    console.log('Board:', selectedBoard);
    console.log('Consumer ID:', consumerId);
  };

  return (
    <Container className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Electricity Bill Payment
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth className={styles.formControl}>
            <InputLabel>State</InputLabel>
            <Select
              value={selectedState}
              onChange={handleStateChange}
              label="State"
              className={styles.select}
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText className={styles.helperText}>Select your state</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth disabled={!selectedState} className={styles.formControl}>
            <InputLabel>Electricity Board</InputLabel>
            <Select
              value={selectedBoard}
              onChange={handleBoardChange}
              label="Electricity Board"
              className={styles.select}
            >
              {selectedState && boards[selectedState]?.map((board) => (
                <MenuItem key={board} value={board}>
                  {board}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText className={styles.helperText}>Select your electricity board</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Consumer ID"
            variant="outlined"
            value={consumerId}
            onChange={handleConsumerIdChange}
            className={styles.textField}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit} className={styles.button}>
            Pay Bill
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ElectricityBill;
