import React, { useState } from "react";
import { BsPlus, BsThreeDots } from "react-icons/bs";
import CustomInput from "../CustomInput/CustomInput";

const a = [
    {
        cards: [{ title: "Hello" }, { title: "Bye" }],

    },
    {
        cards: { title: "Bye" }
    }
]
export const Cards = () => {
    return (
        <div className="flex gap-2">
            <div className="py-4 w-72 px-2 bg-[#EBECF0] rounded-md">
                <div className="w-30 px-1 py-1  min-w-[18rem] max-w-xs  ">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-[#374151] py-1">Backlog</h3>
                        <BsThreeDots />
                    </div>
                    {a[0]?.cards.map((item) => (
                        <p>{item.title}</p>
                    ))}
                </div>
                <CustomInput />
            </div>

            <div className="pt-4 pb-2 w-72 px-2 bg-[#EBECF0] rounded-md">
                <div className="w-30 px-4 py-1  min-w-[18rem] max-w-xs   rounded">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-[#374151] py-1">Backlog</h3>
                        <BsThreeDots />
                    </div>
                </div>
                <CustomInput />
            </div>
        </div>
    );
};
