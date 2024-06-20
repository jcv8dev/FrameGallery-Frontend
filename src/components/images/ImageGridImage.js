const ImageGridImage = (props) => {


    return (
        <img src={`localhost:8080/api/rest/v1/image/${props.image}`}/>

    )
}

export default ImageGridImage