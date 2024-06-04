interface FieldErrorProps {
    children: React.ReactNode;
}

const FieldError = (props: FieldErrorProps) => {
    return (
        <div className="pt-2 pl-2 text-sm text-danger-500">
            {props.children}
        </div>
    );
};

export default FieldError;
