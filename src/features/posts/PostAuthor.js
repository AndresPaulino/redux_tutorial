import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

import React from 'react';

function PostAuthor({ userId }) {
  console.log(userId);

  const users = useSelector(selectAllUsers);
  console.log(users);
  const author = users.find((user) => user.id === userId);
  return <div>by {author ? author.name : 'Unknown author'}</div>;
}

export default PostAuthor;
