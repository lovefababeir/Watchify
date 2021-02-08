import React from "react";
import { Link } from "react-router-dom";
import "./UploadForm.scss";
import videoThumbnail from "../assets/Images/Upload-video-preview.jpg";

const UploadForm = props => {
	const submitVideo = props.submitFunction;

	return (
		<form className="upload" onSubmit={submitVideo}>
			<h1 className="upload__header">Upload Video</h1>
			<div className="upload__video-details">
				<div className="video-thumbnail">
					<h4 className="label">Video Thumbnail</h4>
					<img
						className="video-thumbnail__image"
						src={videoThumbnail}
						alt="A thumbnail of the video you would like to upload"
					/>
				</div>
				<div className="video-captions">
					<h4 className="label" htmlFor="videoTitle">
						Title Your Video
					</h4>

					<input
						name="videoTitle"
						className="video-captions__titleBox"
						type="text"
						placeholder="Add a title to your video"
					></input>
					<h4 className="label label-description" htmlFor="description">
						Add a video description
					</h4>
					<input
						name="description"
						className="video-captions__descriptionBox"
						type="textarea"
						placeholder="Add a description of your video"
					></input>
				</div>
			</div>
			<div className="buttons">
				{/* Cancel button cancels upload and directs user to home page */}
				<button className="buttons__cancelBtn" type="reset">
					<Link to="/" className="links">
						Cancel
					</Link>
				</button>
				<button className="buttons__uploadBtn" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};

export default UploadForm;
