import React from 'react'
import { VscClose } from 'react-icons/vsc'

const CardInfoModal = ({ isShowModal, setIsShowModal, selectedItem }) => {
    return (
        <>
            {isShowModal && <div className="fixed top-0 left-0 w-full h-full bg-black-rgba  z-50">
                <div className="bg-white  w-[780px] h-[100%] opacity-100 my-5 mx-auto p-6 z-40 relative rounded-md">
                    <h3 className="text-[#172B4D] text-2xl font-bold">{selectedItem?.title}</h3>
                    <button onClick={() => setIsShowModal(false)} className="absolute top-2 right-2 text-2xl">
                        <VscClose />
                    </button>
                </div>
            </div>}
        </>
    )
}

export default CardInfoModal