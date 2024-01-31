import React from 'react';
import { useDispatch } from 'react-redux';
import {addReaction} from './postsSlice'

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({post}) => {
    const dispatch = useDispatch()

  const renderReactions = Object.keys(reactionEmoji).map(name => {
    const emoji = reactionEmoji[name];
    return (
      <button 
        key={name} 
        className="emoji__btn" 
        onClick={() => dispatch(addReaction({id:post.id, name}))}>
            {emoji} {post.reactions[name]}
      </button>
    );
  });

  return (
    <div>
      {renderReactions}
    </div>
  );
}

export default ReactionButton;