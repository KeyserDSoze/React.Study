type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg',
    color?: 'primary' | 'secondary',
    children: React.ReactNode,
    asElement?: E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

export const InformalText = <E extends React.ElementType = 'div'>({
    size, color, children, asElement
}: TextProps<E>) => {
    const Component = asElement || 'div'
    return (
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    )
}