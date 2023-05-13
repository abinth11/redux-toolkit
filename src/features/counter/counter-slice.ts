import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { counterState } from '../interfaces'
const initialState:counterState={
    value:0
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.value++
        },
        decrement(state){
            state.value--
        },
        addCount(state,action:PayloadAction<number>){
            state.value+=action.payload
        }
    }
})
export const {increment,decrement,addCount} =counterSlice.actions
export default counterSlice.reducer 