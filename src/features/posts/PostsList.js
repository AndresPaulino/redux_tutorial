import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const renderedPosts = orderedPosts.map((post) => (
    <article key={posts.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
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
