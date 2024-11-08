import { size } from "./types";

interface FieldHelpProps {
    children: React.ReactNode;
    textSize: size;
}

const FieldHelp = (props: FieldHelpProps) => {
    const textSizeClass = props.textSize === "sm" ? "text-sm" : (props.textSize === "lg" ? "text-lg" : "text-md");

    return (
        <div className={`
            ${textSizeClass}
            text-gray-500 px-1 mb-1
        `}>
            {props.children}
        </div>
    );
};

export default FieldHelp;
