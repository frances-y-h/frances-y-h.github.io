import { useState, useEffect } from "react";

import Yillow from "./Yillow";
import Concord from "./Concord";
import Mememo from "./mememo";
import GoodHikes from "./GoodHikes";

const Projects = () => {
	const [site, setSite] = useState(0);
	const [interval, setinterval] = useState(null);

	useEffect(() => {
		setinterval(
			setInterval(
				setSite((prevSite) => (prevSite + 1) % 4),
				10000
			)
		);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="project-wrap">
			<div className="title">checkout my projects</div>
			{site === 0 && <Yillow />}
			{site === 1 && <Concord />}
			{site === 2 && <Mememo />}
			{site === 3 && <GoodHikes />}
			<div className="btn-wrap">
				<button
					className={`btn-sq ${site === 0 && `btn-sq-bg`}`}
					onClick={() => {
						setSite(0);
						clearInterval(interval);
					}}
				>
					1
				</button>
				<button
					className={`btn-sq ${site === 1 && `btn-sq-bg`}`}
					onClick={() => {
						setSite(1);
						clearInterval(interval);
					}}
				>
					2
				</button>
				<button
					className={`btn-sq ${site === 2 && `btn-sq-bg`}`}
					onClick={() => {
						setSite(2);
						clearInterval(interval);
					}}
				>
					3
				</button>
				<button
					className={`btn-sq ${site === 3 && `btn-sq-bg`}`}
					onClick={() => {
						setSite(3);
						clearInterval(interval);
					}}
				>
					4
				</button>
			</div>
		</div>
	);
};

export default Projects;
