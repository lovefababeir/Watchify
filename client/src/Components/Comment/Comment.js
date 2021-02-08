import React from "react";
import "./Comment.scss";

function Comment(props) {
	const { name, timestamp, comment, dateFunction } = props;
	const date = dateFunction(timestamp);
	return (
		<li className="submitted">
			<div className="submitted__avatar"></div>
			<div className="submitted__details">
				<h3 className="submitted__name">{name}</h3>
				<p className="submitted__date">{date}</p>
				<p className="submitted__comment">{comment}</p>
			</div>
		</li>
	);
}

export default Comment;
