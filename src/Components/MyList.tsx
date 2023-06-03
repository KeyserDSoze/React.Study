type Persons = {
    names: {
        name: string,
        surname: string
    }[]
}

export const PersonList = (props: Persons) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2 key={name.name}>
                        {name.name} {name.surname}
                    </h2>
                )
            })}
        </div>
    )
}