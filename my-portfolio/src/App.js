import { useEffect, useState, useRef } from "react";

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

	const francesRef = useRef();
	const skillsRef = useRef();
	const projectsRef = useRef();
	const resumeRef = useRef();
	const contactRef = useRef();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div>
			<Frances offsetY={offsetY} ref={francesRef} />
			<Skills ref={skillsRef} />
			<Projects ref={projectsRef} />
			<Resume ref={resumeRef} />
			<Contact offsetY={offsetY} ref={contactRef} />
			<footer>copyright 2022 Frances (Huang) Lau</footer>
		</div>
	);
};

export default App;
