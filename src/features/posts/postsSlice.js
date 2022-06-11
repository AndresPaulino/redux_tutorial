import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Post 1',
    body: 'This is the body of post 1',
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'This is the body of post 2',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
