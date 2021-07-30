const Button = ({counter, setCounter}) => {
    const handleClick = () => {
        setCounter(counter + 1)
    }

    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Button