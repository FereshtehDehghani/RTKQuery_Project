import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import { myreducer } from "./reducer";


const store = configureStore({
    reducer: {
        [myApi.reducerPath]: myApi.reducer,
        [myreducer.name]:myreducer.reducer
    },
    middleware:(mid) =>[...mid(),myApi.middleware],
    // middleware: getDefaultMiddleware => 
    //     getDefaultMiddleware().concat(myApi.middleware)
    
});

export default store;