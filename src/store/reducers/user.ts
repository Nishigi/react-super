import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchLogin,
  fetchUserInfo,
  fetchUserList,
  fetchAddUser,
  fetchUserStatus
} from "@/api";

const initialState = {
  token: localStorage.getItem('token'),
  user: {},
  list: [],
  total: 0
}
//登录
export const login = createAsyncThunk(
  'user/login',//type
  async (payload: string) => {
    const res: any = await fetchLogin(payload)
    console.log(res.token);
    localStorage.setItem('token', res.token)
    return res.token
  }
)
//获取当前用户
export const getUserInfo = createAsyncThunk(
  'user/userinfo',
  async (token: any) => {
    const res: any = await fetchUserInfo(token)
    console.log('当前角色', res.info.role);
    let user = res.info
    user.roleName = user.role
    return user
  }
)
//添加用户
export const addUser = createAsyncThunk(
  'user/adduser',
  async (payload: any) => {
    const res = await fetchAddUser(payload)
    return res
  }
)
//获取全部用户
export const getUserList = createAsyncThunk(
  'user/userlist',
  async (params: any) => {
    const res: any = await fetchUserList(params)
    let list = res
    // console.log('list-------', list);
    return list
  }
)
//禁用启用
export const changeUserStatus = createAsyncThunk(
  'user/status',
  async (params: any) => {
    await fetchUserStatus(params)
    return 1
  }
)
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action: any) => {
        state.token = action.payload
      })
      .addCase(getUserInfo.fulfilled, (state, action: any) => {
        state.user = action.payload
      })
      .addCase(getUserList.fulfilled, (state, action: any) => {
        state.list = action.payload.list
        state.total = action.payload.total
      })
      .addCase(changeUserStatus.fulfilled, (state, action) => {
        // console.log(state);
        // console.log(action);
      })
      .addCase(addUser.fulfilled, (state, action) => {
        // console.log(state);
        // console.log(action);
      })
  }
})

export default userSlice.reducer