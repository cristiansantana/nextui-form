import { size } from "./types";

interface LabelProps {
    label: string;
    for: string;
    hasError?: boolean;
    textSize: size;
}

const Label = (props: LabelProps) => {

    const textSizeClass = props.textSize === "sm" ? "text-sm" : (props.textSize === "lg" ? "text-lg" : "text-md");

    return (
        <label
            htmlFor={props.for}
            className={`
                ${textSizeClass}
                block font-semibold mb-1 mx-1
                ${props.hasError ? "text-danger-500" : "text-gray-700"}
            `}
        >
            {props.label}
        </label>
    );
};

export default Label;
