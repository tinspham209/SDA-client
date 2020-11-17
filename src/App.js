import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import GlobalStyle from "./GlobalStyles";
import { Footer } from "./components";
import { NotFound, Spinner } from "./components/UI/";
import ScrollToTop from "./components/ScrollToTop";

import { useSelector } from "react-redux";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const About = React.lazy(() => import("./pages/About/About"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));

function App() {
	const isDashboard = useSelector((state) => state.dashboard.isDashboard);

	return (
		<Suspense fallback={<Spinner />}>
			<Router>
				<DndProvider backend={HTML5Backend}>
					<GlobalStyle />
					<ScrollToTop />
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path="/about" exact component={About} />
						<Route path="/dashboard" exact component={Dashboard} />
						<Route path="/contact" exact component={Contact} />
						<Route component={NotFound} />
					</Switch>
					{isDashboard ? null : <Footer />}
				</DndProvider>
			</Router>
		</Suspense>
	);
}

export default App;
