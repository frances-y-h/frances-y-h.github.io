import { useEffect, useState } from "react";

import yillow from "../../assets/images/projects/yillow01.png";
import yillow_logo from "../../assets/images/projects/yillow-logo.svg";

const Yillow = () => {
	const [show, setShow] = useState(true);
	const style = { animation: `${show ? "fadeIn" : "fadeOut"} .3s` };

	useEffect(() => {
		setShow(true);

		return () => setShow(false);
	}, []);

	return (
		<div className="project" style={style}>
			<img className="image" src={yillow} alt="Yillow" />
			<div className="description">
				<img className="logo" src={yillow_logo} alt="Yillow" />
				<div>
					Solo Project - A soft clone of Zillow, allowing users to set up
					appointments with real estate agents and review.
				</div>
				<div> -- Built within two weeks.</div>
				<a
					className="btn"
					href="https://yillow-app.herokuapp.com"
					target="_blank"
					rel="noreferrer"
				>
					Live Demo
				</a>
			</div>
		</div>
	);
};

export default Yillow;
