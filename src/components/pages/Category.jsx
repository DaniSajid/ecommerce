import React from 'react';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';

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
          <Typography>{children}</Typography>
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    document.title = "Category";
  }, []);

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
      <Typography variant="h6">Men's Shoes</Typography>
        <p>Explore our range of stylish and comfortable men's shoes.</p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Typography variant="h6">Women's Shoes</Typography>
        <p>Discover the latest trends in women's footwear.</p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Typography variant="h6">Kids' Shoes</Typography>
        <p>Find durable and fun shoes for kids of all ages.</p>
      </CustomTabPanel>
      </Container>
    </>
  );
};

export default Category;
