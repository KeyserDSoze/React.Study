type ButtonProps = {
    message: string
} & React.ComponentProps<'button'>

export const CustomButton = ({ message, children, ...rest }: ButtonProps) => {
    return (
        <button {...rest}>
            {message}
            {children}
        </button>
    )
}