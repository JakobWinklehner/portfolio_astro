import type React from "react";
import HeadingSwitcher from "./HeadingSwitcher";
import TextBlock from "./TextBlock";

const ProjectsComp: React.FC = () => {
	return (
		<div className="pt-6">
			<HeadingSwitcher
				tab1Label="Projects 👨‍💻"
				tab2Label="🏆 Awards"
				tab1Content={
					<>
						<TextBlock
							title="RDM - Remote Desktop Manager"
							company="SYSco EDV"
							duration="Aug 2023 - Jun 2024"
						>
							Desktopanwendung zur Verwaltung von Fernwartungen für SYSco EDV.
							Entwickelt mit C#, WPF und DevExpress im Rahmen der Diplomarbeit.
						</TextBlock>
						<TextBlock
							title="PlanITup"
							company="ABF GmbH"
							duration="Jun 2022 - Feb 2024"
						>
							Webanwendung zur Optimierung von Projektorganisationen, entwickelt
							mit OpenUI5 im Rahmen der HTL-Ausbildung.
						</TextBlock>
					</>
				}
				tab2Content={
					// biome-ignore lint/complexity/noUselessFragments: <explanation>
					<>
						<TextBlock title="Project Award 2024 - HTL Perg">
							<strong>2. Platz</strong> / RDM - Remote Desktop Manager <br />
							<strong>Sonderpreis für wirtschaftliche Verwendbarkeit</strong> /
							RDM - Remote Desktop Manager
						</TextBlock>
					</>
				}
			/>
		</div>
	);
};

export default ProjectsComp;
