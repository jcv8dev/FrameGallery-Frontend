import {useEffect, useState} from "react";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {Col, Container, Row} from "react-bootstrap";

const ImageInfoBanner = (props) => {
    const [imageInfo, setImageInfo] = useState({})
    const authHeader = useAuthHeader()

    useEffect(() => {
        getImageInfo()
    }, []);

    const getImageInfo = () => {
        axios.get(`api/rest/v1/image/${props.id.split(".")[0]}`, {headers: authHeader})
            .then(res => {
                setImageInfo(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <p className={"text-center fs-3 mb-2"}>"{imageInfo.title}"</p>
                        <p className={"text-center fst-italic fs-5 mb-2"}>{imageInfo.description}</p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default ImageInfoBanner