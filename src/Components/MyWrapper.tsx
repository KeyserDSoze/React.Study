import './MyWrapper.css';

type Wrapper = {
    children: React.ReactNode,
    value: 'red' | 'green'
}

export const Wrap = (props: Wrapper) => {
    return (
        <div className={props.value}>
            {props.children}
        </div>
    )
}