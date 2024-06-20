import axios from "axios";
import {useEffect, useState} from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {Col, Container, Row} from "react-bootstrap";
import ImageGridImage from "./ImageGridImage";

const ImageGrid = () => {

    const authHeader = useAuthHeader();
    const [imagePaths, setImagePaths] = useState([]);  // Step 2: Initialize state

    let fetchImages = () => {
        axios.get("/api/rest/v1/image/all?showAll=true", {headers: {Authorization: authHeader}})
            .then(res => {
            setImagePaths(res.data)
        }).catch(err => {
        })
    }

    useEffect(() => {
        fetchImages()
    }, []);

    return(
        <>
            <Container>
                <Row>
                    {imagePaths.map((image) => (
                        <Col xs={6}><img src={`localhost:8080/api/rest/v1/image/${image}`} /> </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default ImageGrid