import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "January",
        average: 40,
    },
    {
        name: "February",
        average: 30,
    },
    {
        name: "March",
        average: 20,
    },
    {
        name: "April",
        average: 27,
    },
    {
        name: "May",
        average: 68,
    },
    {
        name: "June",
        average: 23,
    },
    {
        name: "July",
        average: 34,
    },
];

export default class CountLineChart extends PureComponent {
    render() {
        return (
            <>
                <div>
                    <p className="subtitle">
                        You read an average of <span>46 </span>
                        pages per day this year.
                    </p>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 20,
                                left: 0,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="average" strokeWidth={3} stroke="#bf5f82" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </>
        );
    }
}
