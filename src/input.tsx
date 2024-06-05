import { Input as InputField, InputProps as NextuiInputProps } from "@nextui-org/react";
import useForm from "./context/useForm";
import { color, radius, size, FieldBaseProps } from "./types";
import FieldWrapper from "./fieldWrapper";
import FieldHelp from "./fieldHelp";
import FieldError from "./fieldError";
import Label from "./label";

interface InputProps extends FieldBaseProps {
    value: string;
    size?: size;
    radius?: radius;
    color?: color;
    maxLength?: NextuiInputProps["maxLength"];
    placeholder?: string;
    autocomplete?: boolean;
    readonly?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    // Todo: Add all Nextui Input classname slots
    classNames?: {
        input: string;
    }
    onChange?: (value: string) => void;
}

const Input = (props: InputProps) => {

    const form = useForm();

    const isDisabled = props.isDisabled || form.isSubmitting;

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (props.onChange) {
            props.onChange(value);
        }
    };

    return (
        <FieldWrapper className={props.className}>
            <Label
                for={props.id}
                label={props.label ? props.label : ""}
                hasError={props.error ? true : false}
            />
            {props.help && <FieldHelp>{props.help}</FieldHelp>}
            <InputField
                id={props.id}
                size={props.size}
                radius={props.radius}
                color={props.color}
                maxLength={props.maxLength}
                value={props.value}
                onChange={onChangeHandler}
                type="text"
                label=""
                isInvalid={props.error ? true : false}
                isReadOnly={props.readonly ? true : false}
                placeholder={props.placeholder ? props.placeholder : ""}
                autoComplete={props.autocomplete ? "on" : "off"}
                isDisabled={isDisabled}
                startContent={props.startContent}
                endContent={props.endContent}
                classNames={{
                    input: props.classNames?.input
                }}
            />
            {props.error && <FieldError>{props.error}</FieldError>}
        </FieldWrapper>
    );
};

export default Input;
