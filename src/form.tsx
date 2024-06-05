import useForm from "./context/useForm";
import FormProvider from "./context/provider";

interface FormProps {
    children: React.ReactNode;
    className?: string;
    onSubmit?: () => void | Promise<void>;
}

const Form = (props: FormProps) => {
    return (
        <FormProvider>
            <FormContent className={props.className} onSubmit={props.onSubmit}>
                {props.children}
            </FormContent>
        </FormProvider>
    );
};

const FormContent = (props: FormProps) => {
    const context = useForm();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (props.onSubmit) {
            context.setIsSubmitting(true);
            await Promise.resolve(props.onSubmit());
            context.setIsSubmitting(false);
        }
    };

    const className = props.className ? props.className : "";

    return (
        <form onSubmit={submitHandler} className={className}>
            {props.children}
        </form>
    );
};

export default Form;
