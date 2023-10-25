function Message() {
    const name = "Tim"
    if (name)
        // this code in braces is evaluated as an expression. Any JS can go in here if it returns a value
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>
}

export default Message;

