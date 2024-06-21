const ImageGridImage = (props) => {

    let cursor = props.cursor || "default"

    return (
        <div className={"bg-light-subtle p-2 m-1 shadow-sm"}>
            <img style={{cursor: cursor}} className={"img-fluid"} src={props.src} alt={""} onClick={props.clickHandler}/>
        </div>
    )
}

export default ImageGridImage