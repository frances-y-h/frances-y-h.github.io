import { useEffect, useState } from "react";

import Frances from "./components/Frances";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App = () => {
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => {
		setOffsetY(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div>
			<Frances offsetY={offsetY} />
			<Skills />
			<Projects />
			<Resume />
			<Contact />
			<footer>copyright © 2022 Frances (Huang) Lau</footer>
		</div>
	);
};

export default App;
