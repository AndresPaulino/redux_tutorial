import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const renderedPosts = orderedPosts.map((post) => (
    <article key={posts.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />

        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
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
