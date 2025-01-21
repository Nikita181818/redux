import { createSlice } from '@reduxjs/toolkit'

const cartSlice= createSlice({
    name:"Cart",
    initialState:[],//this is the starting state
    //reducers are objects wo kch function ko leta hai jaise add function lega jo 2 argument leta hai state,action 
    //state or action ka pre-defined matlab hai ismei
    reducers:{
        //saare action jaise add,remove,update inhe reducers ke andar rkhdenge
      add(state,action){
            state.push(action.payload)//payload is the data that is passed to the action
            //jab bhi add function ko call krenge usmei jo value pass krenge vo value payload ke andar aati hai
            //state mei wo aaega jo initial state mei daalenge
        },
        remove(state,action){
            return state.filter((item)=>
              item.id !== action.payload.id
            )

        }

    }

})
export const {add,remove} =cartSlice.actions;
export default cartSlice.reducer
