import React from "react";
import MainTemplate from "../../components/templates/main.template";
import Grid from "@material-ui/core/Grid";
import { AppBar } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainTemplate>
      <h2 className="px-3 pb-3 mt-2 font-weight-bold">
        Restaurant Management Dashboard
      </h2>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paper}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                >
                  <Tab label="Sales" {...a11yProps(0)} />
                  <Tab label="Expenses" {...a11yProps(1)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                Sales
              </TabPanel>
              <TabPanel value={value} index={1}>
                Expenses
              </TabPanel>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} className={classes.paper}>
              Customer Satisfaction
              <List>
                <ListItem>a</ListItem>
                <ListItem>b</ListItem>
                <ListItem>c</ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} className={classes.paper}>
              Hot Menu
              <List>
                <ListItem>a</ListItem>
                <ListItem>b</ListItem>
                <ListItem>c</ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} className={classes.paper}>
              Deal
              <List>
                <ListItem>a</ListItem>
                <ListItem>b</ListItem>
                <ListItem>c</ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </MainTemplate>
  );
};

export default Dashboard;
