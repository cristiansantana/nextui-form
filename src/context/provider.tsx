import { useState } from "react";
import formContext, { FormContext } from ".";

interface Props {
    children: React.ReactNode;
}

const FormProvider = (props: Props) => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const context: FormContext = {
        isSubmitting,
        setIsSubmitting,
    };

    return (
        <formContext.Provider value={context}>
            {props.children}
        </formContext.Provider>
    );
};

export default FormProvider;
