import React from "react";
import "./Aside.scss";
import NextVideo from "../NextVideo/NextVideo.js";
import { Link } from "react-router-dom";

const Aside = props => {
	const { videos, selectecVideoId } = props;
	const videoList = videos.filter(video => video.id !== selectecVideoId);

	return (
		<aside className="main__nextVideo">
			<h4 className="main__nextVideo-title">Next Video</h4>
			{videoList.map(video => {
				return (
					<Link to={`/${video.id}`} className="links" key={video.id}>
						<NextVideo
							title={video.title}
							channel={video.channel}
							image={video.image}
						/>
					</Link>
				);
			})}
		</aside>
	);
};

export default Aside;
