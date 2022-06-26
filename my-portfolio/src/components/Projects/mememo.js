import { useEffect, useState } from "react";

import mememo from "../../assets/images/projects/mememo01.png";
import mememo_logo from "../../assets/images/projects/mememo-logo.svg";

const Mememo = () => {
	const [show, setShow] = useState(true);
	const style = { animation: `${show ? "fadeIn" : "fadeOut"} .3s` };

	useEffect(() => {
		setShow(true);

		return () => setShow(false);
	}, []);
	return (
		<div className="project" style={style}>
			<img className="image" src={mememo} alt="mememo" />
			<div className="description">
				<img className="logo" src={mememo_logo} alt="mememo" />
				<div>
					Solo Project - Influenced by Evernote, mememo is a full-stack
					application built on React Redux, and Express JS.
				</div>
				<div> -- Built within one week.</div>
				<a
					className="btn"
					href="https://mememo.herokuapp.com"
					target="_blank"
					rel="noreferrer"
				>
					Live Demo
				</a>
			</div>
		</div>
	);
};

export default Mememo;
