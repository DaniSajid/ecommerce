import React, { useState } from 'react';
import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import ManCat from './categorypages/ManCat';
import GirlCat from './categorypages/GirlCat';
import KidCat from './categorypages/KidCat';

// Define the TabPanel component
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

// Define a11yProps function for accessibility
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Category = () => {
  document.title = "Category";
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="css-top">
        <h1 className="display-5 fw-normal bg-body-tertiary text-center text-body-emphasis">Category</h1>
      </div>
      <Container>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Men's Shoes" {...a11yProps(0)} />
            <Tab label="Women's Shoes" {...a11yProps(1)} />
            <Tab label="Kids' Shoes" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box>
            <Typography variant="h6">Men's Shoes</Typography>
            <Grid container columns={12} spacing={2}>
              <ManCat />
            </Grid>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box>
            <Typography variant="h6">Women's Shoes</Typography>
            <Grid container columns={12} spacing={2}>
              <GirlCat />
            </Grid>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Box>
            <Typography variant="h6">Kids' Shoes</Typography>
            <Grid container columns={12} spacing={2}>
              <KidCat />
            </Grid>
          </Box>
        </CustomTabPanel>
      </Container>
    </>
  );
};

export default Category;
