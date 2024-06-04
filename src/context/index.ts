import { createContext } from "react"

export interface FormContext {
    isSubmitting: boolean;
    setIsSubmitting: (isSubmitting: boolean) => void;
}

const formContext = createContext<FormContext | undefined>(undefined);

export default formContext;
