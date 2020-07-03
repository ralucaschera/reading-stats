import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
import Storage from "@material-ui/icons/LibraryBooks";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        // width: 500,
    },
});
function BottomNavigationTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction onClick={() => props.history.push("/")} label="Dashboard" icon={<Dashboard />} />
            <BottomNavigationAction onClick={() => props.history.push("/search")} label="Search" icon={<Search />} />
            <BottomNavigationAction
                onClick={() => props.history.push("/inventory")}
                label="Inventory"
                icon={<Storage />}
            />
        </BottomNavigation>
    );
}

export default withRouter(BottomNavigationTabs);
