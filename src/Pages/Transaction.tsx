import React from "react";
import { BiExport } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { masterCard } from "../data/dummy";
import DataTable from "./Table";

const Transaction = () => {
  return (
    <div className="ml-72 bg-gray-100">
      <div className="flex p-4 flex-col lg:flex-nowrap justify-start ">
        <div className="flex items-center justify-between">
          <p className="font-bold">Transaction</p>{" "}
          <div className="flex">
            <div className="flex items-center mr-5 gap-2 cursor-pointer p-1 bg-white border-slate-300 rounded-lg">
              <p>
                <span className="text-gray-400 text-14">Last 7 days</span>{" "}
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>{" "}
            <div className="flex items-center gap-2 cursor-pointer p-1 bg-white border-slate-300 rounded-lg">
              <BiExport className="text-gray-400 text-14" />
              <p>
                <span className="text-gray-400 text-14">Export</span>{" "}
              </p>
            </div>{" "}
          </div>
        </div>

        <div className="bg-white flex p-4 flex-col mt-4">
          <div className="flex items-center justify-between">
            <div className="flex  flex-col">
              <div className="flex items-center justify-between">
                <p className="font-bold">Your Wallet</p>{" "}
                <p className="text-xs">Transaction this month: 34</p>
              </div>

              <div className="drop-shadow flex flex-col dark:text-gray-200 justify-between dark:bg-secondary-dark-bg h-44 rounded-xl  w-[90px] lg:w-96 p-5  m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                <div className="flex justify-between items-start">
                  <p className="font-bold text-gray-600">Total balance :</p>

                  <p className="font-semibold text-xl">#7,288</p>
                </div>
                <div className="mt-6 w-full flex justify-between">
                  <button
                    type="button"
                    style={{
                      backgroundColor: "white",
                      borderColor: "green",
                      borderWidth: 1,
                      color: "green",
                      borderRadius: "10px",
                    }}
                    className={` text-4 p-1 w-[100px] hover:drop-shadow-xl `}
                  >
                    withdraw
                  </button>

                  <button
                    type="button"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      borderRadius: "10px",
                    }}
                    className={` text-4 p-1 w-[100px] hover:drop-shadow-xl `}
                  >
                    Fund
                  </button>
                </div>
              </div>
            </div>

            <div className="flex  flex-col">
              <div className="flex items-center justify-start">
                <p className="text-xl font-bold ">Cards</p>
              </div>

              <div className="border-gray-200 border bg-white flex flex-col dark:text-gray-200 justify-between dark:bg-secondary-dark-bg h-44 rounded-xs  w-96 p-2  m-3 ">
                <div className="flex border-b-1 border-gray-200 justify-between items-start">
                  <p className="pb-1 text-sm">See all</p>

                  <BiExport className="text-gray-400 text-14" />
                </div>

                <div className="flex mb-2 justify-between items-center">
                  <div className="flex justify-start items-start flex-col">
                    <div className="flex  items-center justify-center">
                      {" "}
                      <img
                        src={masterCard}
                        alt=""
                        className="w-5 h-5 mr-2"
                      />{" "}
                      <p className="text-xs   font-medium">Thomas</p>{" "}
                    </div>
                    <p className="text-xs font-medium ">223323**** ***7889</p>
                  </div>

                  <button
                    type="button"
                    style={{
                      borderColor: "green",

                      color: "green",
                      borderRadius: "1px",
                    }}
                    className={`bg-gray-300 text-xs p-1 w-[49px] hover:drop-shadow-xl `}
                  >
                    Default
                  </button>
                </div>

                <div className="flex  justify-start items-center">
                  <div className="flex justify-start items-start flex-col">
                    <div className="flex  items-center justify-center">
                      {" "}
                      <img
                        src={masterCard}
                        alt=""
                        className="w-5 h-5 mr-2"
                      />{" "}
                      <p className="text-xs   font-medium">Thomas</p>{" "}
                    </div>
                    <p className="text-xs font-medium ">223323**** ***7889</p>
                  </div>
                </div>

                <div className="flex border-t-1 border-gray-200 justify-end pt-1 items-center">
                  <p className=" text-sm">Add New Card</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
