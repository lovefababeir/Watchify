import React from "react";
import "./Main.scss";
import Aside from "../Aside/Aside";
import SelectedVideo from "../SelectedVideo/SelectedVideo";
import SelectedVideoInfo from "../SelectedVideoInfo/SelectedVideoInfo";
import axios from "axios";

class VideoList extends React.Component {
	state = {
		listOfVideos: [],
		selectedVideo: null,
	};

	chooseVideo = id => {
		axios
			.get(`/videos/${id}`)
			.then(video => {
				this.setState({ selectedVideo: video.data });
			})
			.catch(err => console.log("No details found for video ID:", id));
	};

	addComment = event => {
		event.preventDefault();
		const comment = event.target.comment.value;
		const id = this.state.selectedVideo.id;
		axios
			.post(`/videos/${id}/comments`, {
				name: "Mohan Muruge",
				comment: comment,
			})
			.then(result => {
				this.chooseVideo(id);
				console.log(result);
			})
			.catch(err => console.log("could not add comment", err));
		event.target.comment.value = "";
	};

	convertDate = timestamp => {
		let currentTime = Date.now();
		let timeLapsed = currentTime - timestamp;
		let dateSubmitted = new Date(timestamp);
		let secs = timeLapsed / 1000;
		let mins = secs / 60;
		let hrs = mins / 60;
		let days = hrs / 24;
		let weeks = days / 7;

		if (!currentTime) {
			return `${
				dateSubmitted.getMonth() + 1
			}/${dateSubmitted.getUTCDate()}/${dateSubmitted.getFullYear()}`;
		}

		if (secs < 1) {
			return `now`;
		} else if (secs < 60) {
			return `${Math.floor(secs)} seconds ago`;
		} else if (mins < 60) {
			return `${Math.floor(mins)} minutes ago`;
		} else if (hrs < 24) {
			return `${Math.floor(hrs)} hours ago`;
		} else if (days < 7) {
			return `${Math.floor(days)} days ago`;
		} else if (weeks < 52) {
			return `${Math.floor(weeks)} weeks ago`;
		} else {
			return `${
				dateSubmitted.getMonth() + 1
			}/${dateSubmitted.getUTCDate()}/${dateSubmitted.getFullYear()}`;
		}
	};

	likesButton = () => {
		const videoId = this.state.selectedVideo.id;
		axios
			.put(`/videos/${videoId}/likes`)
			.then(result => {
				this.chooseVideo(videoId);
			})
			.catch(err => console.log(err));
		// console.log(this.state.selectecVideo);
	};

	render() {
		const selectedVideo = this.state.selectedVideo;
		const listOfVideos = this.state.listOfVideos;
		return (
			<>
				{this.state.selectedVideo && (
					<main className="main">
						<SelectedVideo video={selectedVideo} />
						<section className="main__video-details">
							<SelectedVideoInfo
								video={selectedVideo}
								dateFunction={this.convertDate}
								commentHandler={this.addComment}
								likesButton={this.likesButton}
							/>

							<Aside videos={listOfVideos} selectecVideoId={selectedVideo.id} />
						</section>
					</main>
				)}
			</>
		);
	}

	componentDidMount() {
		let defaultSelected = null;
		if (this.props.match.params.videoId) {
			defaultSelected = this.props.match.params.videoId;
		}

		axios
			.get(`/videos`)
			.then(data => {
				this.chooseVideo(defaultSelected || data.data[0].id);
				data.data.forEach(video =>
					this.setState({
						listOfVideos: this.state.listOfVideos.concat(video),
					})
				);
			})
			.catch(err =>
				console.log("Sorry we could not retrieve the information:", err)
			);
	}

	componentDidUpdate(prevProps) {
		const prevVideoId = prevProps.match.params.videoId;
		const currentVideoId = this.props.match.params.videoId;

		if (prevVideoId === currentVideoId) {
			return "don't need to update";
		}
		const homevideo = this.state.listOfVideos[0].id;
		this.setState({
			selectecVideo: this.chooseVideo(currentVideoId || homevideo),
		});
	}
}

export default VideoList;
