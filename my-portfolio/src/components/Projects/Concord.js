import { useEffect, useState } from "react";

import concord from "../../assets/images/projects/concord01.png";
import concord_logo from "../../assets/images/projects/concord-logo.svg";

const Concord = () => {
	const [show, setShow] = useState(true);
	const style = { animation: `${show ? "fadeIn" : "fadeOut"} .3s` };

	useEffect(() => {
		setShow(true);

		return () => setShow(false);
	}, []);

	return (
		<div className="project" style={style}>
			<img className="image" src={concord} alt="Concord" />
			<div className="description">
				<img className="logo" src={concord_logo} alt="Concord" />
				<div>
					Team Project - Discord clone created with web sockets, React JS front
					end and Python Flask server.
				</div>
				<div> -- Built within one week.</div>
				<a
					className="btn"
					href="https://go-concord.herokuapp.com"
					target="_blank"
					rel="noreferrer"
				>
					Live Demo
				</a>
			</div>
		</div>
	);
};

export default Concord;
