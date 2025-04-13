import type React from "react";
import HeadingSwitcher from "./HeadingSwitcher";
import TextBlock from "./TextBlock";

const WorkEduComp: React.FC = () => {
	return (
		<div className="pt-6">
			<HeadingSwitcher
				tab1Label="Work Experience 🛠️"
				tab2Label="🏫 Education"
				tab1Content={
					<>
						<TextBlock
							title=".NET Software Developer Intern"
							company="SYSco EDV ist Vertrauenssache GmbH - Schwertberg"
							duration="Aug 2023 - Sep 2023"
						>
							Entwicklung einer Desktopanwendung mit C#, WPF und DevExpress zur
							Verwaltung von Fernwartungen. Beitrag zur Diplomarbeit{" "}
							<a href="/projects" className="inTextLink">
								RDM - Remote Desktop Manager
							</a>{" "}
							für SYSco EDV.
						</TextBlock>

						<TextBlock
							title="IT Intern"
							company="SYSco EDV ist Vertrauenssache GmbH - Schwertberg"
							duration="Aug 2022 - Sep 2022"
						>
							Unterstützung bei IT-bezogenen Tätigkeiten, Fehlerbehebung und
							Kundenbetreuung vor Ort.
						</TextBlock>

						<TextBlock
							title="IT Intern"
							company="Hasenöhrl GmbH - St. Pantaleon-Erla"
							duration="Aug 2021 - Sep 2021"
						>
							Mitarbeit in der IT-Abteilung mit Fokus auf Systemadministration
							und technische Unterstützung.
						</TextBlock>
					</>
				}
				tab2Content={
					<>
						<TextBlock
							title="HTL Perg, Höhere Abteilung für Informatik"
							duration="Sep 2019 - Jun 2024"
						>
							Maturaabschluss mit Schwerpunkt auf Informatik.
						</TextBlock>

						<TextBlock title="NMS Naarn" duration="Sep 2015 - Jun 2019" />
					</>
				}
			/>
		</div>
	);
};

export default WorkEduComp;
