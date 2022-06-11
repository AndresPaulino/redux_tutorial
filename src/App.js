import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <div className='App'>
      <div>
        <AddPostForm />
        <PostsList />
      </div>
    </div>
  );
}

export default App;
