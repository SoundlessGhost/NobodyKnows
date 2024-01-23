/* eslint-disable no-unused-vars */
import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css'
import {data} from '../../utilities/areaChartData'
import {data1} from '../../utilities/radarChartData'
const Statistics = () => {
    return (
        <div>
            <div className='ChartContainer'>
                <AreaChart className='c'
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorMath" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPhy" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#eb0c0c" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#eb0c0c" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis dataKey="Y" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Math" stroke="#8884d8" fillOpacity={1} fill="url(#colorMath)" />
                    <Area type="monotone" dataKey="Eng" stroke="#82ca9d" fillOpacity={1} fill="url(#colorEng)" />
                    <Area type="monotone" dataKey="Phy" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPhy)" />
                </AreaChart>
                <RadarChart outerRadius={90} width={730} height={250} data={data1}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Mike" dataKey="A" stroke="#dadbcc" fill="#383f8f" fillOpacity={0.6} />
                    <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#5cc452" fillOpacity={0.6} />
                    <Legend />
                </RadarChart>
            </div>
            <div className='chartTitle'>
                <h2>AreaChart</h2>
                <h2>RadarChart</h2>
            </div>
            <div className='description'>
                <p>NPM is the easiest and fastest way to get started using Recharts. It is also the recommended installation method when building single-page applications (SPAs). It pairs nicely with a CommonJS module bundler such as Webpack. <br /><br />
                    $ npm install recharts <br />
                    Recharts is a Redefined chart library built with React and D3.
                    <br /><br />
                    Re-designed Chart for React <br /><br />Jan 29, 2016 <br /><br />
                    Over the past few years, our team were satisfied with React and Redux in some projects, which are almost web applications involved to data presentation or operation. The projects need use a lot of charts which is so painful that we decided to create new chart library for React...
                    </p>
                    <span className='span'>Copyright (c) 2016-2023 Recharts Group</span>
            </div>
        </div>
    );
};

export default Statistics;