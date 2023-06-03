type ListableProps<T> = {
    items: T[],
    onClick: (value: T) => void
}

export const Listable = <T extends { id: number, label: string }>({
    items,
    onClick
}: ListableProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {item.label} at index {index}
                    </div>
                )
            })}
        </div>
    )
}