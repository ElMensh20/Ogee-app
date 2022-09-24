import { createSlice } from '@reduxjs/toolkit';

const initialState={
    list:[]
};

export const roomSlice = createSlice({
    name:"room",
    initialState,
    reducers:{
        addRoom: (state,action) => {
            state.list = [...state.list,action.payload]
        }
    }
});

export const { addRoom } = roomSlice.actions;


export const selectRoom = (state) => state.room.list;


export default roomSlice.reducer;