import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Esther T.' },
    { id: '1', name: 'Peter G.' },
    { id: '2', name: 'Xian H.' }
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default usersSlice.reducer;
