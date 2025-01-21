import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './Cartslice'

//jitne bhi reducer hote hain wo store ke andar hote hain, reducer ke andar action hain unnn action ko call karna hota hai bas
//iss store ko poore app mei enable krdenge 
//store ke andar reducer hain or reducer k andar saare actions hain.

const store=configureStore({
    reducer:{
        cart:cartreducer
        //cart mei saari states rakhi hain
    }
})
export default store;