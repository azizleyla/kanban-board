import React from 'react'
import { BsPlus, BsThreeDots } from "react-icons/bs";

export const Cards = () => {
    return (
        <div className='flex gap-3 pt-4 pb-2 px-2' >
            <div className='bg-[#EBECF0] px-4 py-1  min-w-[18rem] max-w-xs   rounded'>
                <div className='flex justify-between items-center'>
                    <h3 className='font-semibold text-[#374151] py-1'>Backlog</h3>
                    <BsThreeDots />
                </div>
                <div className='my-4 cursor-pointer hover:bg-[#dadbe2] py-1  rounded'>
                    <button className='flex items-center text-[#6B7180]'>
                        <BsPlus className='text-[#6B7180] font-medium text-2xl' />
                        Add Card</button>
                </div>
            </div>
            <div className='bg-[#EBECF0] px-4 py-1  min-w-[18rem] max-w-xs w-xs rounded'>
                <div className='flex justify-between items-center'>
                    <h3 className='font-semibold text-[#374151] py-1'>Todo</h3>
                    <BsThreeDots />
                </div>
                <div className='my-4 cursor-pointer hover:bg-[#dadbe2] py-1  rounded'>
                    <button className='flex items-center text-[#6B7180]'>
                        <BsPlus className='text-[#6B7180] font-medium text-2xl' />
                        Add Card</button>
                </div>
            </div>
            <div className='bg-[#EBECF0] px-4 py-1  min-w-[18rem] max-w-xs w-xs  rounded'>
                <div className='flex justify-between items-center'>
                    <h3 className='font-semibold text-[#374151] py-1'>In Progress</h3>
                    <BsThreeDots />
                </div>
                <div className='my-4 cursor-pointer hover:bg-[#dadbe2] py-1 rounded'>
                    <button className='flex items-center text-[#6B7180]'>
                        <BsPlus className='text-[#6B7180] font-medium text-2xl' />
                        Add Card</button>
                </div>
            </div>
            <div className='bg-[#EBECF0] px-4 py-1  min-w-[18rem] max-w-xs w-xs  rounded'>
                <div className='flex justify-between items-center'>
                    <h3 className='font-semibold text-[#374151] py-1'>Done</h3>
                    <BsThreeDots />
                </div>
                <div className='my-4 cursor-pointer hover:bg-[#dadbe2] py-1 rounded'>
                    <button className='flex items-center text-[#6B7180]'>
                        <BsPlus className='text-[#6B7180] font-medium text-2xl' />
                        Add Card</button>
                </div>
            </div>
        </div>
    )
}
