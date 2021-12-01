import * as React from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Form from "./Form";

import TravelPage from "../pages/TravelPage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`,
  };
}
export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#3D2CA7",
        height: 110,
        marginTop: "80px",
        maxWidth: 1000,
        textTransform: "none",
      }}
    >
      <Typography variant="h6" noWrap component="div">
        Carbon Footprint
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        indicatorColor="primary"
        textColor="primary"
        aria-label="visible arrows tabs example"
        color="primary"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
          height: "60px",
          // bgcolor: "#FEFEFE",
          border: 1,
          textTransform: "none",
        }}
      >
        <Tab
          icon={<PhoneIcon sx={{ color: "#3D2CA7" }} />}
          iconPosition="start"
          label="Travel"
          sx={{
            color: "#3D2CA7",
            border: 1,
            bgcolor: "#FEFEFE",
            textTransform: "none",
          }}
          {...a11yProps(0)}
        />
        <Tab
          icon={<PhoneIcon />}
          iconPosition="start"
          label="Shipping"
          sx={{
            color: "#3D2CA7",
            border: 1,
            bgcolor: "#FEFEFE",
            textTransform: "none",
          }}
          {...a11yProps(1)}
        >
          {" "}
          Shipping
        </Tab>
        <Tab
          icon={<PhoneIcon />}
          iconPosition="start"
          label="Server"
          sx={{
            color: "#3D2CA7",
            border: 1,
            bgcolor: "#FEFEFE",
            textTransform: "none",
          }}
          {...a11yProps(2)}
        />
        <Tab
          icon={<PhoneIcon />}
          iconPosition="start"
          label="Commuting"
          sx={{
            color: "#3D2CA7",
            border: 1,
            bgcolor: "#FEFEFE",
            textTransform: "none",
          }}
          {...a11yProps(3)}
        />
        <Tab
          icon={<FavoriteIcon />}
          iconPosition="start"
          label="Vehicles"
          sx={{
            color: "#3D2CA7",
            border: 1,
            bgcolor: "#FEFEFE",
            textTransform: "none",
          }}
          {...a11yProps(4)}
        />
        <Tab
          icon={<PersonPinIcon />}
          iconPosition="start"
          label="Real Estate"
          sx={{
            color: "#3D2CA7",
            border: 1,
            bgcolor: "#FEFEFE",
            textTransform: "none",
          }}
          {...a11yProps(5)}
        />
        <Tab
          icon={<PersonPinIcon />}
          iconPosition="start"
          label="Events"
          sx={{
            color: "#3D2CA7",
            border: 1,
            bgcolor: "#FEFEFE",
            textTransform: "none",
          }}
          {...a11yProps(6)}
        />
        <Tab
          icon={<PersonPinIcon />}
          iconPosition="start"
          label="Products"
          sx={{
            color: "#3D2CA7",
            border: 1,
            bgcolor: "#FEFEFE",
            textTransform: "none",
          }}
          {...a11yProps(7)}
        />
        <Tab
          icon={<PersonPinIcon />}
          iconPosition="start"
          label="Direct"
          sx={{
            color: "#3D2CA7",
            border: 1,
            bgcolor: "#FEFEFE",
            textTransform: "none",
          }}
          {...a11yProps(8)}
        />
        <Tab
          icon={<PersonPinIcon />}
          iconPosition="start"
          label="Other"
          sx={{
            color: "#3D2CA7",
            border: 1,
            bgcolor: "#FEFEFE",
            textTransform: "none",
          }}
          {...a11yProps(9)}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <TravelPage label="Travel" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Shipping
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TravelPage label="Server" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Commuting
      </TabPanel>
      <TabPanel value={value} index={4}>
        vehicles
      </TabPanel>
      <TabPanel value={value} index={5}>
        Real Estate
      </TabPanel>
      <TabPanel value={value} index={6}>
        Events
      </TabPanel>
      <TabPanel value={value} index={7}>
        Products
      </TabPanel>
      <TabPanel value={value} index={8}>
        Direct
      </TabPanel>
      <TabPanel value={value} index={9}>
        Others
      </TabPanel>
    </Box>
  );
}
