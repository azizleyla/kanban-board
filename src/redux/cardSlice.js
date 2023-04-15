import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "tasks",
  initialState: { cards: [] },

  reducers: {
    addCard: (state, action) => {
      console.log(action);
      const newCard = {
        id: action.payload.id,
        title: action.payload.title,
        status: action.payload.status,
      };
      state.cards.push(newCard);
    },
    deleteCartItem: (state, action) => {
      const newCards = state.cards.filter(item => item.id !== action.payload)
      state.cards = newCards
    },
    handleStatus: (state, action) => {
      console.log(state.cards)
      let widgets = state.cards.filter(a => {
        if (a.title === action.payload.id) {
          a.status = action.payload.status
        }
        return a;
      })
      console.log(widgets)
      state.cards = widgets;

    },
    handleSortableList: (state, action) => {
      let tasks = [...state.cards]
      const selectedItem = tasks.find(item => item.id === action.payload.dragItem.current);
      tasks = tasks.filter(item => item.id !== selectedItem.id)
      const index = [...state.cards].findIndex(item => item.id === action.payload.dragOverItem.current);
      tasks.splice(index, 0, selectedItem);
      state.cards = tasks
    }
  },
});
export const { addCard, deleteCartItem, handleStatus, handleSortableList } = cardSlice.actions;

export default cardSlice.reducer;
