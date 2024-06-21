import {useParams} from "react-router-dom";
import LogoBanner from "../../components/static/LogoBanner";
import {Button, Col, Row} from "react-bootstrap";
import ImageGridImage from "../../components/images/ImageGridImage";

const ImageEditView = () => {
    let { id } = useParams();

    return(
        <>
            <LogoBanner />
            <Row className={"pb-3"} style={{}}>
                <ImageGridImage cursor={""} src={`http://localhost:8080/api/rest/v1/image/${id}`}/>
            </Row>
            <Row className={"pb-3"}>
                <Col xs={4} sm={3} md={2} className={"mx-auto"}>
                    <Button variant={"primary"} className={"w-100"} onClick={() => {window.location = "/admin"}}>Go back</Button>
                </Col>
            </Row>
        </>
    )
}

export default ImageEditView