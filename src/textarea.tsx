import { Textarea as NextuiTextarea, TextAreaProps } from "@nextui-org/react";
import { color, radius, size, FieldBaseProps } from "./types";
import FieldWrapper from "./fieldWrapper";
import FieldHelp from "./fieldHelp";
import FieldError from "./fieldError";
import Label from "./label";

interface TextareaProps extends FieldBaseProps {
    value: string;
    size?: size;
    color?: color;
    radius?: radius;
    maxLength?: TextAreaProps["maxLength"];
    placeholder?: string;
    autocomplete?: boolean;
    readonly?: boolean;
    variant?: TextAreaProps["variant"];
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    // Todo: Add all Nextui Textarea classname slots
    classNames?: {
        input: string;
    };
    onChange?: (value: string) => void;
}

const Textarea = (props: TextareaProps) => {
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
            <NextuiTextarea
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
                isDisabled={props.isDisabled}
                startContent={props.startContent}
                endContent={props.endContent}
                classNames={{
                    input: props.classNames?.input,
                }}
            />
            {props.error && <FieldError>{props.error}</FieldError>}
        </FieldWrapper>
    );
};

export default Textarea;
