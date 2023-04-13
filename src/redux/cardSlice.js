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
    deleteCartItem:(state,action) =>{
        const newCards = state.cards.filter(item => item.id !=action.payload)
        state.cards = newCards
    },
    handleStatus:(state,action) =>{
        console.log(action)
        let widgets = state.cards.filter(a => {
            if(a.title === action.payload.id){
                a.status = action.payload.status
            }
            return a;
        })
    
        state.cards = widgets;
        
    }
  },
});
export const { addCard ,deleteCartItem,handleStatus} = cardSlice.actions;

export default cardSlice.reducer;
