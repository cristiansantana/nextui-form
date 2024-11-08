import { size } from "./types";

interface FieldErrorProps {
    children: React.ReactNode;
    textSize: size;
}

const FieldError = (props: FieldErrorProps) => {

    const textSizeClass = props.textSize === "sm" ? "text-sm" : (props.textSize === "lg" ? "text-lg" : "text-md");

    return (
        <div className={`
            ${textSizeClass}
            pt-2 pl-2 text-danger
        `}>
            {props.children}
        </div>
    );
};

export default FieldError;
