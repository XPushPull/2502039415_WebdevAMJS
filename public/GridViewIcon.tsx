import * as React from "react";
export default function GridViewIcon(props: any) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={48}
			width={48}
			viewBox="0 0 48 48"
			{...props}
		>
			<path
				d="M6 22.5V6h16.5v16.5ZM6 42V25.5h16.5V42Zm19.5-19.5V6H42v16.5Zm0 19.5V25.5H42V42ZM9
    19.5h10.5V9H9Zm19.5 0H39V9H28.5Zm0 19.5H39V28.5H28.5ZM9 39h10.5V28.5H9Zm19.5-19.5Zm0 9Zm-9 0Zm0-9Z"
			/>
		</svg>
	);
}
