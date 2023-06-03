type ButtonProps = {
    message: string,
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButtonWithOmition = ({ message, children, ...rest }: ButtonProps) => {
    return (
        <button {...rest}>
            {message}
            {children}
        </button>
    )
}