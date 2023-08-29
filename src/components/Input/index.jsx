

export const Input = (props) => {
    return (
        <input
            type={props.type}
            onClick={props.onClick}
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    )
}