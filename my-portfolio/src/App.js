import { useRef } from "react";

import Frances from "./components/Frances";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
	const francesRef = useRef();
	const skillsRef = useRef();
	const projectsRef = useRef();

	return (
		<>
			<div className="top">
				<div className="page-wrap">
					{/* <Frances ref={francesRef} />
					<Skills ref={skillsRef} />
					<Projects ref={projectsRef} /> */}
					<div className="page" ref={francesRef}>
						Frances
					</div>
					<div className="page" ref={skillsRef}>
						Skills
					</div>
					<div className="page" ref={projectsRef}>
						Project
					</div>
				</div>
			</div>
			<div className="bottom">
				<div
					onClick={() =>
						francesRef.current.scrollIntoView({
							behavior: "smooth",
							block: "start",
						})
					}
				>
					About Frances
				</div>
				<div
					onClick={() =>
						skillsRef.current.scrollIntoView({
							behavior: "smooth",
							block: "start",
						})
					}
				>
					Skills
				</div>
				<div
					onClick={() =>
						projectsRef.current.scrollIntoView({
							behavior: "smooth",
							block: "start",
						})
					}
				>
					Portfolio
				</div>
				<div>Resume</div>
				<div>Contact Me</div>
			</div>
		</>
	);
}

export default App;
