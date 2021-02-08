import React from "react";
import "../CommentForm/CommentForm.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

const CommentForm = props => {
	const { commentHandler } = props;

	return (
		<>
			<img className="comments__avatar" src={avatar} alt="Owner's Avatar"></img>
			<form className="form" id="commentForm" onSubmit={commentHandler}>
				<label htmlFor="comment" className="form__label">
					Join the Conversation
				</label>
				<textarea
					name="comment"
					id="comment"
					rows="10"
					className="form__input form__input--comment"
					placeholder="Add a new comment"
				></textarea>
				<input
					type="submit"
					value="Comment"
					className="form__submitBtn"
					id="submit"
					autoComplete="off"
				/>
			</form>
		</>
	);
};

export default CommentForm;
