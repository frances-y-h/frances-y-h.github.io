import { Fade } from "react-awesome-reveal";

import resume from "../../assets/FrancesHuangResume.pdf";

const Resume = () => {
	return (
		<div className="resume-wrap">
			here is my resume{" "}
			<Fade direction="up">
				<a href={resume} target="_blank" rel="noreferrer">
					<i className="fa-solid fa-file-pdf"></i>
				</a>
			</Fade>
		</div>
	);
};

export default Resume;
