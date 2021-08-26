import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchCates,
    fetchArticle,
    fetchArticleList,
    fetchArticleInfo
} from "@/api";

const initialState = {
    cateList: [],
    articleList: [],
    total: 0,
    articleInfo: {}
}
//获取文章信息  
export const getArticleInfo = createAsyncThunk(
    'article/info',
    async (params: any) => {
        const res: any = await fetchArticleInfo(params)
        return res.info
    }
)
//获取下拉信息
export const getCates = createAsyncThunk(
    'article/cates',
    async () => {
        const res: any = await fetchCates({})
        return res.list
    }
)
//添加修改文章
export const articleModify = createAsyncThunk(
    'article/modify',
    async (data: any) => {
        const res: any = await fetchArticle(data)
        return res.info
    }
)
//获取全部文章
export const getArticleList = createAsyncThunk(
    'article/list',
    async (params: any) => {
        const res: any = await fetchArticleList(params)
        return res
    }
)

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getArticleInfo.fulfilled, (state, action) => {
                state.articleInfo = action.payload
            })
            .addCase(getCates.fulfilled, (state, action) => {
                state.cateList = action.payload
            })
            .addCase(articleModify.fulfilled, (state, action) => {
                // console.log(state);
                // console.log(action);
            })
            .addCase(getArticleList.fulfilled, (state, action) => {
                state.articleList = action.payload.list
                state.total = action.payload.total
            })
    }
})

export default articleSlice.reducer