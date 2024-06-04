export type size = "sm" | "md" | "lg";

export type radius = "none" | "sm" | "md" | "lg" | "full";

export type color = "default" | "primary" | "secondary" | "success" | "warning" | "danger";

export interface FieldBaseProps {
    id: string;
    isDisabled?: boolean;
    label?: string;
    className?: string;
    error?: string | React.ReactNode;
    help?: string | React.ReactNode;
}
