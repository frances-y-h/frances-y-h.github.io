import resume from "../../assets/FrancesHuangResume.pdf";

const Resume = () => {
	return (
		<div className="resume-wrap">
			here is my resume{" "}
			<a href={resume} target="_blank" rel="noreferrer">
				<i className="fa-solid fa-file-pdf"></i>
			</a>
		</div>
	);
};

export default Resume;
