import React from "react";
import "./SelectedVideo.scss";
import playBtn from "../../assets/Icons/SVG/Icon-play.svg";
import fullscreenBtn from "../../assets/Icons/SVG/Icon-fullscreen.svg";
import volumeBtn from "../../assets/Icons/SVG/Icon-volume.svg";
import videoMP4 from "../../assets/Video/Video.mp4";

function SelectedVideo(props) {
	return (
		<>
			<section className="player">
				<video
					className="player__video"
					src={videoMP4}
					poster={props.video.image}
				></video>

				<div className="player__btnContainer">
					<img
						className="player__playBtn"
						src={playBtn}
						alt="Click the play button to play the video"
					/>
					<div className="player__scrubber">
						<div className="player__loader"></div>
					</div>
					<span>
						<img
							className="player__fullscreenBtn"
							src={fullscreenBtn}
							alt="Click this fullscreen button to view the video in full screen"
						/>
						<img
							className="player__volumeBtn"
							src={volumeBtn}
							alt="Click this volume button to adjust the sound level"
						/>
					</span>
				</div>
			</section>
		</>
	);
}

export default SelectedVideo;
