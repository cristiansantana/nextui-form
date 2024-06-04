interface LabelProps {
    label: string;
    for: string;
    hasError?: boolean;
}

const Label = (props: LabelProps) => {
    return (
        <label
            htmlFor={props.for}
            className={`
                block text-sm font-semibold mb-1 mx-1
                ${props.hasError ? "text-danger-500" : "text-gray-700"}
            `}
        >
            {props.label}
        </label>
    );
};

export default Label;
