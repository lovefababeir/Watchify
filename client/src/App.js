import React from "react";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import "./styles/partials/global.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UploadPage from "./pages/Upload";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main className="">
				<div classname="relative"></div>
				<Switch>
					<Route path="/" exact component={Main} />
					<Route path="/upload" component={UploadPage} />
					<Route path="/:videoId" component={Main} />
				</Switch>
			</main>
		</BrowserRouter>
	);
}

export default App;
