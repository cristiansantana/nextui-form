import { useContext } from "react"
import formContext from "."

const useForm = () => {
    const context = useContext(formContext);

    if (!context) {
        throw new Error("useForm must be used within a FormProvider");
    }

    return context;
};

export default useForm;
