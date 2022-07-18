import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import Yillow from "./Yillow";
import Concord from "./Concord";
import Mememo from "./mememo";
import GoodHikes from "./GoodHikes";

const Projects = () => {
	return (
		<div className="project-wrap">
			<div className="title">checkout my projects</div>

			<Fade cascade damping={0.1}>
				<Yillow />
				<Concord />
				<Mememo />
				<GoodHikes />
			</Fade>
		</div>
	);
};

export default Projects;
