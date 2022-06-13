import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article key={posts.id}>
      <h3>{post.title}</h3>
          <p>{post.body}</p>
            <PostAuthor userId={post.userId} />
    </article>
  ));
    
    console.log(posts)
  return (
    <div>
      <h2>Posts</h2>
      {renderedPosts}
    </div>
  );
}

export default PostsList;
