import { createSlice, nanoid } from '@reduxjs/toolkit';

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
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, body) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
