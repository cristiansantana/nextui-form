interface FieldWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const FieldWrapper = (props: FieldWrapperProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default FieldWrapper;
