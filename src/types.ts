export type size = "sm" | "md" | "lg";

export type radius = "none" | "sm" | "md" | "lg";

export type color = "default" | "primary" | "secondary" | "success" | "warning" | "danger";

export interface FieldBaseProps {
    id: string;
    size?: size;
    textSize: size;
    isDisabled?: boolean;
    label?: string;
    className?: string;
    error?: string | React.ReactNode;
    help?: string | React.ReactNode;
}
