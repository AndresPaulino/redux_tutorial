import { useDispatch } from 'react-redux';
import { addReaction } from './postsSlice';

const reactionEmojis = {
  like: '👍',
  dislike: '👎',
  love: '❤️',
  wow: '😮',
  rocket: '🚀',
  coffee: '☕️',
};

function ReactionButtons({ post }) {
  const dispatch = useDispatch();

  const reactionButtons = Object.keys(reactionEmojis).map((reaction) => {
    const emoji = reactionEmojis[reaction];
    return (
      <button
        className='reactionButton'
        key={reaction}
        onClick={() => dispatch(addReaction({ postId: post.id, reaction }))}
      >
        {emoji} {post.reactions[reaction]}
      </button>
    );
  });

  return <div className='reactionButton'>{reactionButtons}</div>;
}

export default ReactionButtons;
