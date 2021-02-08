import React from "react";
import videoThumbnail from "../assets/Images/Upload-video-preview.jpg";
import axios from "axios";
import UploadForm from "./UploadForm";

const Upload = () => {
	const submitVideo = evt => {
		evt.preventDefault();

		const description = evt.target.description.value;
		const title = evt.target.videoTitle.value;

		if (title === "" || description === "") {
			alert(
				"Please make sure that you have given your video a title and a description."
			);
		} else {
			axios
				.post("/videos", {
					title: title,
					description: description,
					image: videoThumbnail,
				})
				.then(result => {
					console.log(result);
				})
				.catch(err => console.log(err));
			window.location.replace("/");
		}
	};

	return <UploadForm submitFunction={submitVideo} />;
};

export default Upload;
