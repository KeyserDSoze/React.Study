export type ProfileProps = {
    name: string
}

export const Profile = ({ name }: ProfileProps) => {
    return <div>The name is {name}</div>
}