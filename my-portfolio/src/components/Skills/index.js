import { Fade } from "react-awesome-reveal";

import css3 from "../../assets/images/skills/css3.png";
import docker from "../../assets/images/skills/docker.png";
import flask from "../../assets/images/skills/flask.png";
import git from "../../assets/images/skills/git.png";
import html5 from "../../assets/images/skills/html5.png";
import js from "../../assets/images/skills/js.png";
import node from "../../assets/images/skills/node.png";
import postgres from "../../assets/images/skills/postgres.png";
import python from "../../assets/images/skills/python.png";
import react from "../../assets/images/skills/react.png";
import redux from "../../assets/images/skills/redux.png";
import sequelize from "../../assets/images/skills/sequelize.png";

const Skills = () => {
	return (
		<div className="skill-wrap">
			<div className="title">my skills</div>
			<div className="skills">
				<Fade direction="up" damping={0.1} cascade>
					<img className="skill-img" src={html5} alt="HTML 5" />
					<img className="skill-img" src={css3} alt="CSS 3" />
					<img className="skill-img" src={js} alt="JavaScript" />
					<img className="skill-img" src={node} alt="Node Js" />
					<img className="skill-img" src={sequelize} alt="Sequelize" />
					<img className="skill-img" src={postgres} alt="PostgreSQL" />
					<img className="skill-img" src={git} alt="Git" />
					<img className="skill-img" src={react} alt="React JS" />
					<img className="skill-img" src={redux} alt="Redux" />
					<img className="skill-img" src={python} alt="Python" />
					<img className="skill-img" src={flask} alt="Flask" />
					<img className="skill-img" src={docker} alt="Docker" />
				</Fade>
			</div>
			<ul className="skills-ul">
				<Fade delay={1000}>
					<li>SQL Alchemy</li>
					<li>Alembic</li>
					<li>Web Development</li>
					<li>REST APIs</li>
					<li>Pair Programming</li>
					<li>Test Driven Development</li>
					<li>Object Oriented Programming</li>
				</Fade>
			</ul>
		</div>
	);
};

export default Skills;
