import React, { useState } from 'react'
import { BsPlus, BsThreeDots } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";

const CustomInput = () => {
    const [isShow, setIsShow] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsShow(false)
    }

    return (
        <>
            {!isShow ?
                <div onClick={() => setIsShow(true)} className='my-4 cursor-pointer hover:bg-[#dadbe2] py-1  rounded'>
                    <button className='flex items-center text-[#6B7180]'>
                        <BsPlus className='text-[#6B7180] font-medium text-2xl' />
                        Add Card</button>
                </div>
                :
                <form onSubmit={handleSubmit} className='w-full h-full px-1 relative'>
                    <input autoFocus className='w-full py-1 px-3 h-12 rounded' placeholder='Enter text' />
                    <button onClick={() => setIsShow(false)} className='absolute right-3 top-1'>
                        <RiCloseLine className='text-xl' />
                    </button>
                </form>
            }
        </>
    )
}

export default CustomInput