import './MyWrapper.css';

type InputProps = {
    value: string,
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    styles?: React.CSSProperties
}

export const InputOne = (props: InputProps) => {
    const { handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    } } = props;
    const { styles = { color: "red" } } = props;
    return (
        <input className={props.value} style={styles} onChange={handleChange} />
    )
}