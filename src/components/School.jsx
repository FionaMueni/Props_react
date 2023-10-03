function School ({boys, age, func}) {
    console.log (boys)
    return (
        <div>
        <h1>{boys}</h1>
        <h1>{age}</h1>
        <button onClick={()=>func()}>increment</button>

        </div>
    )
}

export default School