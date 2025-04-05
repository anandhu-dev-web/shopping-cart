import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users:localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        userRegister:(state,action)=>{
            state.users.push(action.payload);
            localStorage.setItem("users",JSON.stringify(state.users));
            
        },
        clearUser:(state)=>{
            state.users=[]
        },
        removeUser:(state)=>{

            localStorage.removeItem("users");
            state.users.pop();
            
        }
    }
})

export const {userRegister,clearUser,removeUser} = userSlice.actions;
export default userSlice.reducer;