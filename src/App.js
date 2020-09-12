import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import GlobalStyle from "./GlobalStyles";

import { NotFound, Spinner } from "./components/UI/";
import ScrollToTop from "./components/ScrollToTop";
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const About = React.lazy(() => import("./pages/About/About"));

function App() {
	return (
		<Suspense fallback={<Spinner />}>
			<Router>
				<GlobalStyle />
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/about" exact component={About} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Suspense>
	);
}

export default App;
