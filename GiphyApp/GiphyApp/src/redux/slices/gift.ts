
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Igift } from "../../types/gift"
//este seria nuestro reducer completo 
//con todo esto ya tendriamos nuestro estado inicial y el seteo


// Define a type for the slice state
interface IInitialState {
    gift:Igift[]
  }
  
  // Define the initial state using that type
  const initialState: IInitialState = {
    gift:[]
  }
  //al crear el slice ya tenemos nuestro estado global 
  export const giftSlice = createSlice({
    name: 'giftState',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        //estas son nuestras actions: las cuales nos permiten modificar  
      //nuestro principal reducer seria el useGif
      setGifts: (state, action: PayloadAction<Igift[]>) => {
        state.gift= action.payload 
      },
      //en caso necesario podemos hacer un reset
      resetGifts:(state)=>{
        state.gift=[]
      }
    },
  })

//debemos exportar nuestras actions 
export const {setGifts,resetGifts}= giftSlice.actions
export default giftSlice.reducer