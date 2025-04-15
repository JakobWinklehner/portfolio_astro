import type React from "react";
import HeadingSwitcher from "./HeadingSwitcher";
import TextBlock from "./TextBlock";
import { projects } from "../data/projectsData";

const ProjectsComp: React.FC = () => {
	return (
		<div className="pt-6">
			<HeadingSwitcher
				tab1Label="Projects 👨‍💻"
				tab2Label="🏆 Awards"
				tab1Content={
					// biome-ignore lint/complexity/noUselessFragments: <explanation>
					<>
						{projects.map((project) => (
							<TextBlock
								key={project.title}
								title={project.title}
								company={project.company}
								duration={project.duration}
							>
								{project.description}
							</TextBlock>
						))}
					</>
				}
				tab2Content={
					<TextBlock title="Project Award 2024 - HTL Perg">
						<strong>2. Platz</strong> / RDM - Remote Desktop Manager <br />
						<strong>Sonderpreis für wirtschaftliche Verwendbarkeit</strong> /
						RDM - Remote Desktop Manager
					</TextBlock>
				}
			/>
		</div>
	);
};

export default ProjectsComp;
