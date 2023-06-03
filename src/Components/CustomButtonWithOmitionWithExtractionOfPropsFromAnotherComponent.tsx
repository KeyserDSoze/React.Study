import { CustomButtonWithOmition } from "./CustomButtonWithOmition"

export const CustomButtonWithOmitionWithExtractionOfPropsFromAnotherComponent = ({ message, children, ...rest }: React.ComponentProps<typeof CustomButtonWithOmition>) => {
    return (
        <button {...rest}>
            {message}
            {children}
        </button>
    )
}