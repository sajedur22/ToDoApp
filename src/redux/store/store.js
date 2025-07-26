import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../state/counter/counterslice'

const store= configureStore({
    reducer:{
       counter:counterSlice,
    },
})

export default store;