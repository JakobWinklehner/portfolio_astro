import type React from "react";
import { useState, type ReactNode } from "react";

interface HeadingSwitcherProps {
	tab1Label: string;
	tab2Label: string;
	tab1Content: ReactNode;
	tab2Content: ReactNode;
}

const HeadingSwitcher: React.FC<HeadingSwitcherProps> = ({
	tab1Label,
	tab2Label,
	tab1Content,
	tab2Content,
}) => {
	const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1");

	return (
		<div className="">
			<div className="flex justify-between space-x-4 mb-4">
				<button
					type="button"
					className={`cursor-pointer ${activeTab === "tab1" ? "underline" : ""}`}
					onClick={() => setActiveTab("tab1")}
				>
					<h1>{tab1Label}</h1>
				</button>
				<button
					type="button"
					className={`cursor-pointer ${activeTab === "tab2" ? "underline" : ""}`}
					onClick={() => setActiveTab("tab2")}
				>
					<h1>{tab2Label}</h1>
				</button>
			</div>
			<div>
				{activeTab === "tab1" && <div>{tab1Content}</div>}
				{activeTab === "tab2" && <div>{tab2Content}</div>}
			</div>
		</div>
	);
};

export default HeadingSwitcher;
