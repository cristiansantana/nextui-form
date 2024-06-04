interface FieldHelpProps {
    children: React.ReactNode;
}

const FieldHelp = (props: FieldHelpProps) => {
    return <div className="text-neutral-500 text-sm px-1 mb-1">{props.children}</div>;
};

export default FieldHelp;
