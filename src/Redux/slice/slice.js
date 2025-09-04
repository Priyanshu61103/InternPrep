import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "light",
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
     changeMode : (state)=>{
         if(state.value === "light"){
            state.value = "dark";
         }
         else{
            state.value = "light";
         }
     }
  },
})

// Action creators are generated for each case reducer function
export const { changeMode } = modeSlice.actions

export default modeSlice.reducer