import React, { Component } from "react";
import CountPieChart from "../../components/Charts/CountPieChart";
import CountLineChart from "../../components/Charts/CountLineChart";
import { Divider } from "@material-ui/core";
class Dashboard extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div className="pageContainer">
                <CountPieChart />
                <Divider style={{ marginTop: 16, marginBottom: 16 }} />
                <CountLineChart />
            </div>
        );
    }
}

export default Dashboard;
