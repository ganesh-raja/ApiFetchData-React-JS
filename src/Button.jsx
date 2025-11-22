const Button = ({ButtonText, data, setData}) => {
    return (
        <button
            className={ButtonText === data ? "selected" : null}
            type="button"
            onClick={() => setData(ButtonText)}
        >
            {ButtonText.toUpperCase()}
        </button>
    )  
}

export default Button