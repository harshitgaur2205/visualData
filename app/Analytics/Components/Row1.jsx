"use client"
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import SalesData from "./SalesData";
import LineChart2 from "./LineChart2";

const Row1 = () => {
  const detail = [
    {
      "id": "Offline",
      "data": [
        {
          "x": 2020,
          "y": 18
        },
        {
          "x": 2021,
          "y": 15
        },
        {
          "x": 2022,
          "y": 22
        },
        {
          "x": 2023,
          "y": 19
        },
        {
          "x": 2024,
          "y": 26
        }
      ]
    },
    {
      "id": "Online",
      "data": [
        {
          "x": 2020,
          "y": 27
        },
        {
          "x": 2021,
          "y": 28
        },
        {
          "x": 2022,
          "y": 15
        },
        {
          "x": 2023,
          "y": 15
        },
        {
          "x": 2024,
          "y": 26
        }
      ]
    }
  ]
  return (
    <main className="flex gap-5 m-5 max-lg:flex-col">
      <div className="Overall Sales max-lg:w-[90%] w-[45%] shadow-2xl rounded-3xl min-h-[400px] flex flex-col justify-between">
        <div className="main-header flex justify-between items-center p-7 max-lg:p-4 max-md:py-4 max-sm:pb-0 max-sm:flex-col max-sm:items-start">
          <div className="header">
            <p className=" text-sm text-[#606060]">Overall Sales</p>
            <div className="flex gap-2 items-center">
              <h1 className="text-lg">$238,560.93</h1>
              <FaArrowTrendUp className=" text-green-600" />
              <span> 13.02%</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <select
                name="period"
                id="period"
                className="bg-slate-200 p-3 rounded-lg"
              >
                <option value="This Month">This Month</option>
              </select>
            </div>
          </div>
        </div>
        <div className="p-4 w-full h-full max-lg:p-4 max-md:py-0 max-sm:pt-0" style={{height:"50vh" ,width:"100%"}} >
          <LineChart2 data={detail} />
          {/* <img src="/data.svg" alt="data" className="w-full h-full" /> */}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 pl-7 max-lg:pl-0 max-sm:grid-cols-1 max-sm:grid-rows-4">
        <SalesData
          iconURL="/icon1.png"
          heading="Total Sales"
          value="$108,560.93"
          growth="13.02%"
          timePeriod="From May"
        />
        <SalesData
          iconURL="/icon2.png"
          heading="Avg. Order Value"
          value="$564.34"
          growth="3.02%"
          timePeriod="From May"
        />
        <SalesData
          iconURL="/icon3.png"
          heading="Online Sessions"
          value="$130,234"
          growth="6.02%"
          timePeriod="From May"
        />
        <SalesData
          iconURL="/icon4.png"
          heading="Conversion Rate"
          value="$86.34%"
          growth="0.32%"
          timePeriod="From May"
        />
      </div>
    </main>
  );
};

export default Row1;
