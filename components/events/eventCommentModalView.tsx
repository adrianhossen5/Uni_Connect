import React, { useState } from 'react';
import CommentListView from './eventCommentsListView';
import CommentCreateView from './eventCommentCreateView';

const CommentModalView = (props: {
  setCommentModalView: any;
  event: any;
  role: any;
}) => {
  const [newComment, setNewComment] = useState(false);
  const event = props.event;
  const role = props.role;

  const handleClose = () => {
    props.setCommentModalView(false);
  };

  const handleNewComment = () => {
    setNewComment(!newComment);
  };

  return (
    <div
      className="h-[22rem] outline bg-stone-50
        p-7 rounded-lg overflow-y-scroll"
    >
      <div className="flex justify-between mb-4">
        <div>
          <button
            onClick={handleClose}
            className="mx-auto rounded-[0.5rem] w-max border-[0.175rem] border-neutral-700 px-3 py-0.5 font-bold transition
             bg-neutral-50 text-md hover:bg-neutral-400 hover:text-gray-800"
          >
            Close
          </button>
        </div>
        <div>
          <button
            onClick={handleNewComment}
            className={`${
              !newComment
                ? 'mx-auto rounded-[0.5rem] w-max border-[0.175rem] text-md border-neutral-700 px-3 py-0.5 font-bold transition bg-neutral-50 text-md hover:bg-neutral-400 hover:text-gray-800'
                : 'mx-auto rounded-[0.5rem] w-max border-[0.175rem] text-md border-neutral-700 px-3 py-0.5 font-bold transition bg-neutral-400 text-gray-800'
            }`}
          >
            Add Comment
          </button>
        </div>
      </div>
      <div className={`${newComment ? '' : 'hidden'}`}>
        <CommentCreateView event={event}></CommentCreateView>
      </div>
      <div
        className="py-[.5rem] flex-col text-center mx-auto max-w-sm xs:max-w-sm 
      sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-md 2xl:max-w-lg grid md:grid-cols-1 
      lg:grid-cols-1"
      >
        <div className={`${!newComment ? '' : 'hidden'}`}>
          <CommentListView feedback={event.feedback} role={role}></CommentListView>
        </div>
      </div>
    </div>
  );
};

export default CommentModalView;
