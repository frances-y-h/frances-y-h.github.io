import frances from "../../assets/images/frances.png";

const Contact = ({ offsetY, scrollY }) => {
	return (
		<div className="contact-wrap">
			<img
				src={frances}
				className="frances"
				alt="frances"
				style={{
					transform: `translateY(${Math.max(scrollY - offsetY - 100, 0)}px)`,
				}}
			/>
			<div className="container">
				<div
					className="contact"
					style={{
						transform: `translateX(${Math.max(scrollY - offsetY - 100, 0)}px)`,
					}}
				>
					contact me
				</div>
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
