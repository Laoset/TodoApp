import {  configureStore } from "@reduxjs/toolkit";
import taskSlice from "../features/tasks/taskSlice";
import thunk from "redux-thunk";


function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);

    } catch (err) {
        console.log('error occured ', err)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);

    } catch (err) {
        console.log('error occured ', err)
    }
}

const persistedState = loadFromLocalStorage();

export const store = configureStore({
    reducer: {
        tasks: taskSlice
    },
    middleware:[thunk],
    persistedState
})
store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
