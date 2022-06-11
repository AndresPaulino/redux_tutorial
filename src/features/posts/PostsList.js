import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article key={posts.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
  ));
  return (
    <div>
      <h2>Posts</h2>
      {renderedPosts}
    </div>
  );
}

export default PostsList;
