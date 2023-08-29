

export const Button = (props) => {
    return (
        <button 
            onClick={props.onClick}
            loadingText={props.loadingText}
            isLoading={props.isLoading}
        >
            {props.value}
        </button>
    )
}