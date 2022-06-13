import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: 1,
    title: 'Post 1',
    body: 'This is the body of post 1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      like: 0,
      dislike: 0,
      love: 0,
      wow: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'This is the body of post 2',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      like: 0,
      dislike: 0,
      love: 0,
      wow: 0,
      rocket: 0,
      coffee: 0,
    },
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
      prepare(title, body, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            date: new Date().toISOString(),
            userId,
            reactions: {
              like: 0,
              dislike: 0,
              love: 0,
              wow: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction: {
      reducer(state, action) {
        const { postId, reaction } = action.payload;
        console.log(postId, reaction);
        const post = state.find((post) => post.id === postId);
        post.reactions[reaction]++;
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost, addReaction } = postsSlice.actions;

export default postsSlice.reducer;
