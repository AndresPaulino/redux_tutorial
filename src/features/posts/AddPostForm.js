import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addPost } from './postsSlice';

function AddPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleChange = (e) => setTitle(e.target.value);
  const onBodyChange = (e) => setBody(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      dispatch(addPost(title, body));
      setTitle('');
      setBody('');
    }
  };

  return (
    <section>
      <h2>Add a post</h2>
      <form>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='postTitle' value={title} onChange={onTitleChange} />

        <label htmlFor='body'>Body</label>
        <textarea id='body' name='postBody' value={body} onChange={onBodyChange} />

        <button type='button' onClick={handleSubmit}>
          Add Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
