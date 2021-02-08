import React from "react";
import "./SelectedVideoInfo.scss";
import CommentForum from "../CommentForum/CommentForum";
import viewsIcon from "../../assets/Icons/SVG/Icon-views.svg";
import likesIcon from "../../assets/Icons/SVG/Icon-likes.svg";

function SelectedVideoInfo(props) {
	const { video, dateFunction, commentHandler, likesButton } = props;
	const { title, channel, likes, views, timestamp, description } = video;

	return (
		<div className="video-details">
			<div className="video-details__container">
				<h1 className="video-details__title">{title}</h1>
				<div className="posting-info">
					<h3 className="posting-info__owner">By {channel}</h3>
					<p className="posting-info__date">{dateFunction(timestamp)}</p>
				</div>

				<div className="posting-activity">
					<img
						className="posting-activity__views-icon"
						src={viewsIcon}
						alt="Views Icon which indicates how many have views the video"
					/>
					<p className="posting-activity__views">{views}</p>

					{/* <button > */}
					<img
						className="posting-activity__likes-icon"
						src={likesIcon}
						alt="Likes icon which shows how many people liked the video"
						onClick={likesButton}
					/>
					{/* </button> */}
					<p className="posting-activity__likes">{likes}</p>
				</div>
			</div>
			<div className=" video-details__description">
				<p>{description}</p>
			</div>
			<CommentForum
				comments={video.comments}
				commentHandler={commentHandler}
				dateFunction={dateFunction}
			/>
		</div>
	);
}

export default SelectedVideoInfo;
