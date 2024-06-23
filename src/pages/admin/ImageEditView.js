import {useParams} from "react-router-dom";
import LogoBanner from "../../components/static/LogoBanner";
import {Button, Col, Row} from "react-bootstrap";
import ImageGridImage from "../../components/images/ImageGridImage";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {useEffect, useState} from "react";
import ImageEditor from "../../components/administration/ImageEditor";
import FullScreenImage from "../../components/images/FullScreenImage";

const ImageEditView = () => {
    let { id } = useParams();
    let authHeader = useAuthHeader()
    const [imageTrigger, setImageTrigger] = useState(0)


    const setImageInfo = (event, newImageInfo) => {
        event.preventDefault()
        axios.put(`/api/rest/v1/image/${id.split(".")[0]}/`, newImageInfo, {headers: authHeader})
            .then(res => {
                setImageTrigger(prevImageTrigger => prevImageTrigger + 1 )
            })
            .catch(err => {console.error(err)})
    }

    return(
        <>
            <LogoBanner />
            <Row className={"pb-3"}>
                <Col xs={4} sm={3} md={2} className={"mx-auto"}>
                    <Button variant={"primary"} className={"w-100"} onClick={() => {window.location = "/admin"}}>Go back</Button>
                </Col>
            </Row>
            <Row className={"pb-3 mx-1"} style={{}}>
                <FullScreenImage  cursor={""} src={`http://localhost:8080/api/rest/v1/image/${id}`}/>
            </Row>
            <Row className={"pb-3"}>
                <ImageEditor trigger={imageTrigger} submitHandler={setImageInfo} id={id}/>
            </Row>

        </>
    )
}

export default ImageEditView