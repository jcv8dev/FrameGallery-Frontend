const FullScreenImage = (props) => {

    let cursor = props.cursor || "default"


    return (
        <>
            <div className={"bg-light-subtle p-2 mx-auto m-1 shadow-sm"} style={{width: "auto", height: "auto"}}>
                <img style={{cursor: cursor, maxHeight: "75vh", maxWidth: "85vw"}} className={""} src={props.src} alt={""} onClick={props.clickHandler}/>
            </div>
        </>
    )
}

export default FullScreenImage