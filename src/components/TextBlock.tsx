import type React from "react";

interface TextBlockProps {
	title: string; // Title of the text block
	company?: string; // Optional company name
	duration?: string; // Optional duration
	children?: React.ReactNode; // Content inside the text block
}

const TextBlock: React.FC<TextBlockProps> = ({
	title,
	company,
	duration,
	children,
}) => {
	return (
		<div className="pt-4">
			<h2>{title}</h2>
			{company && duration && (
				<p className="text-foreground-muted">
					{company} - {duration}
				</p>
			)}
			{!company && duration && (
				<p className="text-foreground-muted">{duration}</p>
			)}
			<p className="pt-2">{children}</p>
		</div>
	);
};

export default TextBlock;
