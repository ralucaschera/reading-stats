import React, { Component } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { List, ListItem, ListItemText, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

import "./Header.css";

class Header extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            isDrawerOpen: false,
        };
    }

    render() {
        const { isDrawerOpen } = this.state;
        return (
            <>
                <AppBar position="static" style={{ color: "white" }}>
                    <Toolbar>
                        <IconButton
                            onClick={() => {
                                this.setState({ isDrawerOpen: true });
                            }}
                            edge="start"
                            aria-label="menu"
                        >
                            <MenuIcon style={{ color: "white" }} />
                        </IconButton>
                        <Typography variant="h6">READING STATS</Typography>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    anchor={"left"}
                    open={isDrawerOpen}
                    onClose={() => {
                        this.setState({ isDrawerOpen: false });
                    }}
                    onOpen={() => {
                        this.setState({ isDrawerOpen: true });
                    }}
                >
                    <List>
                        {["Option 1", "Option 2", "Option 3"].map((option) => {
                            return (
                                <ListItem>
                                    <ListItemText>{option}</ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                </SwipeableDrawer>
            </>
        );
    }
}

export default Header;
