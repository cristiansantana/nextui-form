import { Button as NextuiButton, ButtonProps as NextuiButtonProps } from "@nextui-org/react";
import { color, radius, size } from "./types";
import useForm from "./context/useForm";

interface ButtonProps {
    children?: React.ReactNode;
    color?: color;
    isLoading?: boolean;
    href?: NextuiButtonProps["href"];
    as?: NextuiButtonProps["as"];
    type?: "button" | "submit" | "reset";
    fullWidth?: boolean;
    isDisabled?: boolean;
    disableRipple?: boolean;
    radius?: radius;
    variant?: NextuiButtonProps["variant"];
    size?: size;
    onPress?: () => void;
}

const Button = (props: ButtonProps) => {
    const form = useForm();
    const type = props.type || "button";
    const isLoading = props.isLoading || (form.isSubmitting && type === "submit");
    const isDisabled = props.isDisabled || form.isSubmitting;

    return (
        <NextuiButton
            fullWidth={props.fullWidth}
            color={props.color}
            type={type}
            isLoading={isLoading}
            isDisabled={isDisabled}
            disableRipple={props.disableRipple}
            onPress={props.onPress}
            radius={props.radius}
            variant={props.variant}
        >
            {props.children}
        </NextuiButton>
    );
};

export default Button;
