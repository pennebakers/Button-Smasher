const Button = ({counter, setCounter}) => {
    const handleClickMe = () => {
        setCounter(counter + 1)
    }

    const handleReset = () => {
        setCounter(0)
    }

    return(
        <div>
            <button onClick={handleClickMe}>Click Me</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Button