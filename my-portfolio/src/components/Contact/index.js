import { Fade } from "react-awesome-reveal";

import frances from "../../assets/images/frances.png";

const Contact = () => {
	return (
		<div className="contact-wrap">
			<Fade direction="down" fraction={0.5}>
				<img src={frances} className="frances" alt="frances" />
			</Fade>
			<div className="container">
				<Fade direction="right">
					<div className="contact">
						contact
						<br />
						me
					</div>
				</Fade>
				<div className="detail" data-tip="Click to copy to clipboard">
					<i className="fa-solid fa-heart" id="heart"></i>
					<div>frances.y.huang@gmail.com</div>
				</div>
				<a
					className="detail"
					href="https://www.linkedin.com/in/frances-huang-660607156/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa-brands fa-linkedin"></i>LinkedIn
				</a>
				<a
					className="detail"
					href="https://github.com/frances-y-h"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa-brands fa-github"></i>GitHub
				</a>
				<a
					className="detail"
					href="https://angel.co/u/frances-huang-lau"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa-brands fa-angellist"></i>Angelist
				</a>
			</div>
		</div>
	);
};

export default Contact;
