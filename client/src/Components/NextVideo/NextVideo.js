import React from "react";
import "./NextVideo.scss";

function NextVideo(props) {
	const { title, channel, image } = props;
	return (
		<div className="nextVideo">
			<img
				className="nextVideo__image"
				alt={`Sneak preview of the video ${title}`}
				src={image}
			></img>
			<div className="nextVideo__details">
				<h3 className="nextVideo__title">{title}</h3>
				<h4 className="nextVideo__owner">{channel}</h4>
			</div>
		</div>
	);
}

export default NextVideo;
