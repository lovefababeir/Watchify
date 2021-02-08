const express = require("express");
const router = express.Router();
const videos = require("../data/data.json");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
	res.status(200).json(
		videos.map(item => {
			return {
				id: item.id,
				title: item.title,
				channel: item.channel,
				image: item.image,
			};
		})
	);
});

router.get("/:videoId", (req, res) => {
	const videoID = req.params.videoId;
	const selectedVideo = videos.find(item => {
		return item.id === videoID;
	});
	if (!selectedVideo) {
		res
			.status(400)
			.send({ success: false, message: "Request body is not present" });
	} else {
		res.status(200).json(selectedVideo);
	}
});

router.post("/:videoId/comments", (req, res) => {
	if (
		req.headers["content-type"] &&
		req.headers["content-type"] === "application/json"
	) {
		if (!req.body.name || !req.body.comment) {
			res.status(400).send({
				success: false,
				message: "Please include a valid body with a name and comment",
			});
		} else {
			const videoID = req.params.videoId;
			const selectedVideo = videos.find(item => {
				return item.id === videoID;
			});
			const newComment = {
				...req.body,
				id: uuidv4(),
				likes: 0,
				timestamp: Date.now(),
			};
			selectedVideo.comments.push(newComment);

			res.status(201).json(
				selectedVideo.comments.sort((a, b) => {
					return b.timestamp - a.timestamp;
				})
			);
		}
	} else {
		res.status(400).send({
			success: false,
			message: "Invalid content-type. JSON format accepted only",
		});
	}
});

router.post("/", (req, res) => {
	if (!req.body.title || !req.body.description) {
		res.status(400).send({
			success: false,
			message: "Please include a valid body with a name and comment",
		});
	} else {
		const newVideo = {
			...req.body,
			id: uuidv4(),
			channel: "Sprint III",
			views: "0",
			likes: "0",
			duration: "7:02",
			videos: "https://project-2-api.herokuapp.com/stream",
			timestamp: Date.now(),
			comments: [],
		};
		videos.push(newVideo);
		res.status(201).json(newVideo);
	}
});

router.put("/:videoId/likes", (req, res) => {
	const videoID = req.params.videoId;
	const selectedVideo = videos.find(item => {
		return item.id === videoID;
	});
	selectedVideo.likes = convertNum(
		parseInt(selectedVideo.likes.replace(",", "")) + 1
	);

	res.status(201).json(selectedVideo.likes);
});

// function to convert integer to number with commas.
//online resources show a simpler one but I didn't understand it so just made my own
const convertNum = num => {
	const numArr = num.toString().split("");
	const newArr = [];

	for (var i = 1; i <= numArr.length; i++) {
		newArr.unshift(numArr[numArr.length - i]);

		//for every 3rd number from the right, this 'if statement' adds a comma in front
		//as long as its not the leading number
		if (!(i % 3) && i !== numArr.length) {
			newArr.unshift(",");
		}
	}
	return newArr.join("");
};

module.exports = router;
