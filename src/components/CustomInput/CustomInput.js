import React, { useState } from "react";
import { BsPlus, BsThreeDots } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/cardSlice";

const CustomInput = ({ status }) => {
  const [isShow, setIsShow] = useState(false);
  const [title, setTitle] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShow(false);
    const newCard = {
      id: crypto.randomUUID(),
      title: title,
      status: status,
    };

    dispatch(addCard(newCard));
    setTitle("");
  };

  return (
    <>
      {!isShow ? (
        <div className="px-2">
        <div
          onClick={() => setIsShow(true)}
          className="mt-1 px-2 cursor-pointer hover:bg-[#dadbe2] py-2  rounded"
        >
          <button className="flex items-center text-[#6B7180]">
            <BsPlus className="text-[#6B7180] font-medium text-2xl" />
            Add Card
          </button>
        </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full h-full px-1 relative">
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            className="w-full pt-2 h-[80px] px-2  round resize-none rounded-lg"
            placeholder="Enter a title for this card"
          />
          <div className="flex items-center gap-3 mt-3">
            <button className="bg-[#0A65E4] py-1 px-2 rounded-sm text-white">
              Add Card
            </button>
            <button onClick={() => setIsShow(false)} className="">
              <VscClose className="text-3xl text-[#6b778c]" />
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default CustomInput;
