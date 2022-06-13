import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addPost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

function AddPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onBodyChange = (e) => setBody(e.target.value);
  const onUserIdChange = (e) => setUserId(parseInt(e.target.value));

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      dispatch(addPost(title, body, userId));
      setTitle('');
      setBody('');
    }
  };

  const canSave = Boolean(title && body && userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a post</h2>
      <form>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='postTitle' value={title} onChange={onTitleChange} />

        <label htmlFor='userId'>User</label>
        <select id='userId' name='userId' value={userId} onChange={onUserIdChange}>
          <option value=''>Select a user</option>
          {usersOptions}
        </select>

        <label htmlFor='body'>Body</label>
        <textarea id='body' name='postBody' value={body} onChange={onBodyChange} />

        <button type='button' onClick={handleSubmit} disabled={!canSave}>
          Add Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
