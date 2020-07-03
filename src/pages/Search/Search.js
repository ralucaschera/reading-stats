import React, { Component } from "react";
import CountPieChart from "../../components/Charts/CountPieChart";
import CountLineChart from "../../components/Charts/CountLineChart";
import { Divider, TextField } from "@material-ui/core";
class Search extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div className="pageContainer">
                <TextField />
            </div>
        );
    }
}

export default Search;
