type WelcomeType = {
    name: string
}

export const Welcome = (props: WelcomeType) => {
    return (
        <div>Hello my sister {props.name}!.</div>
    )
}