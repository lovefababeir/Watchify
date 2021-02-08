import React from "react";
import Comment from "../Comment/Comment";

import "./CommentForum.scss";
import CommentForm from "../CommentForm/CommentForm";

const CommentForum = props => {
	const { comments, commentHandler, dateFunction } = props;

	return (
		<div className="comments">
			<h1 className="comments__header">{comments.length} Comments</h1>
			<CommentForm commentHandler={commentHandler} />
			<div className="comments__submissions">
				{comments
					.sort((a, b) => b.timestamp - a.timestamp)
					.map(entry => {
						return (
							<Comment
								name={entry.name}
								timestamp={entry.timestamp}
								comment={entry.comment}
								key={entry.timestamp}
								dateFunction={dateFunction}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default CommentForum;
