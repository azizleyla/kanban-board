import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { BsPlus, BsThreeDots } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, handleSortableList, handleStatus } from "../../redux/cardSlice";
import CustomInput from "../CustomInput/CustomInput";
import ClickAwayListener from "react-click-away-listener";
import CardInfoModal from "../Modals/CardInfoModal";

export const Cards = () => {
  const { cards } = useSelector((state) => state.boards);
  const [tasks, setTasks] = useState({ todo: [], backlog: [], progress: [] });
  const dispatch = useDispatch();
  const [items, setItems] = useState(cards);
  const [isShowModal, setIsShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState("")
  let dragItem = useRef(null);
  let dragOverItem = useRef(null);

  useEffect(() => {
    setItems(cards);
  }, [cards]);


  useEffect(() => {
    const todo = items?.filter((item) => item.status === "todo");
    const backlog = items?.filter((item) => item.status === "backlog");
    const progress = items?.filter((item) => item.status === "in-progress");
    setTasks({ todo: todo, backlog: backlog, progress: progress });
  }, [items]);


  const handleDelete = (id) => {
    dispatch(deleteCartItem(id));
  };

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("id", item.title);
    dragItem.current = item.id
  };

  const handleDrop = (e, st) => {
    const id = e.dataTransfer.getData("id");
    const obj = { id, status: st };
    dispatch(handleStatus(obj));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleSort = () => {
    let obj = { dragOverItem, dragItem }
    dispatch(handleSortableList(obj))
    dragOverItem.current = null;
    dragItem.current = null;

  }
  // const handleClickAway = () => {
  //   setIsShowInput(false)
  // }
  const handleClick = (id) => {
    setIsShowModal(true)
    const selectedItem = items.find(item => item.id === id)
    setSelectedItem(selectedItem)
  }
  return (
    <div className="flex items-start gap-3">
      <div
        onDrop={(e) => handleDrop(e, "backlog")}
        onDragOver={(e) => handleDragOver(e)}
        className="py-2  pb-3 max-w-80 px-2 bg-[#EBECF0] rounded-lg"
      >
        <div className="w-30 px-1   min-w-[18rem] max-w-xs  ">
          <div className="flex justify-between items-center mb-2" >

            <h3 className="font-semibold text-[#374151] pt-1 pb-2">Backlog</h3>



            {/* {isShowInput && <input className="w-[100%] p-1" value="Backlog" />} */}

            <BsThreeDots />
          </div>
          {tasks?.backlog?.map((item) => (
            <div
              onClick={() => handleClick(item.id)}
              onDragEnd={handleSort}
              onDragEnter={() => dragOverItem.current = item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              key={item.id}
              className="py-4 px-1 cursor-pointer transition bg-white rounded-lg mb-2 relative group"
            >
              <p className="text-md text-[#555]">{item.title}</p>
              <button
                onClick={() => handleDelete(item.id)}
                className="hidden group-hover:block  absolute top-1 right-1 bg-white border-[1px] rounded shadow-sm"
              >
                <VscClose className="text-xl" />
              </button>
            </div>
          ))}
        </div>
        <CustomInput status="backlog" />
      </div>

      <div
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, "todo")}
        className="pt-2 pb-3 max-w-80 px-2 bg-[#EBECF0] rounded-lg"
      >
        <div className="w-30 px-2 py-1  min-w-[18rem] max-w-xs   rounded">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-[#374151] pt-1 pb-2">Todo</h3>
            <BsThreeDots />
          </div>
          {tasks?.todo?.map((item) => (
            <div
              onDragEnd={handleSort}
              onDragEnter={() => dragOverItem.current = item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              key={item.id}
              className="py-4 px-1 cursor-pointer transition bg-white rounded-lg mb-2 relative group"
            >
              <p className="text-md text-[#555]">{item.title}</p>
              <button
                onClick={() => handleDelete(item.id)}
                className="hidden group-hover:block  absolute top-1 right-1 bg-white border-[1px] rounded shadow-sm"
              >
                <VscClose className="text-xl" />
              </button>
            </div>
          ))}
        </div>
        <CustomInput status="todo" />
      </div>

      <div
        onDrop={(e) => handleDrop(e, "in-progress")}
        onDragOver={(e) => handleDragOver(e)}
        className="pt-2 pb-3 max-w-80 px-2 shadow-sm bg-[#EBECF0] rounded-lg"
      >
        <div className="w-30 px-1 py-1  min-w-[18rem] max-w-xs   rounded">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-[#374151] pt-1 pb-2">
              In Progress
            </h3>
            <BsThreeDots />
          </div>
          {tasks?.progress?.map((item) => (
            <div
              onDragEnd={handleSort}
              onDragEnter={() => dragOverItem.current = item.id}
              onDragStart={(e) => handleDragStart(e, item)}
              draggable
              key={item.id}
              className="py-2 h-10 px-2 cursor-pointer transition bg-white rounded-lg mb-2 relative group"
            >
              <p className="text-md text-[#555]">{item.title}</p>
              <button
                onClick={() => handleDelete(item.id)}
                className="hidden group-hover:block  absolute top-2 right-1 bg-white border-[1px] rounded shadow-sm"
              >
                <VscClose className="text-xl" />
              </button>
            </div>
          ))}
        </div>
        <CustomInput status="in-progress" />
      </div>
      <CardInfoModal isShowModal={isShowModal} setIsShowModal={setIsShowModal} selectedItem={selectedItem} />

    </div>
  );
};
