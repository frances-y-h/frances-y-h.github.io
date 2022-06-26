import { useEffect, useState } from "react";

import goodHikes from "../../assets/images/projects/goodhikes01.png";
import goodHikes_logo from "../../assets/images/projects/goodhikes-logo.png";

const GoodHikes = () => {
	const [show, setShow] = useState(true);
	const style = { animation: `${show ? "fadeIn" : "fadeOut"} .3s` };

	useEffect(() => {
		setShow(true);

		return () => setShow(false);
	}, []);

	return (
		<div className="project" style={style}>
			<img className="image" src={goodHikes} alt="GoodHikes" />
			<div className="description">
				<img className="logo" src={goodHikes_logo} alt="GoodHikes" />
				<div>
					Tealm Project - A full-stack hike tracking platform inspired by
					GoodReads and AllTrails, focused on more intuitive user design that
					allows a user to discover and track trails they’ve hiked
				</div>
				<div> -- Built within one week.</div>
				<a
					className="btn"
					href="https://good-hikes.herokuapp.com"
					target="_blank"
					rel="noreferrer"
				>
					Live Demo
				</a>
			</div>
		</div>
	);
};

export default GoodHikes;
