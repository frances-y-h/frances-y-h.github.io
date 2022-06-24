import ascii from "../../assets/images/frances-ascii.svg";

const Frances = ({ offsetY }) => {
	return (
		<div className="frances-wrap">
			<img
				src={ascii}
				className="ascii-art"
				alt="ASCII"
				style={{ transform: `translateY(${offsetY * 0.5}px)` }}
			/>
			<div className="info">
				<div className="title">hi, I'm Frances</div>
				<div
					className="desc"
					style={{ transform: `translateX(${offsetY * 0.9}px)` }}
				>
					I'm a full stack software engineer
				</div>
				<div
					className="craft"
					style={{ transform: `translateX(${offsetY}px)` }}
				>
					I lo<i className="fa-solid fa-heart" id="heart"></i>e to craft from
					scartch
				</div>
			</div>
		</div>
	);
};

export default Frances;
