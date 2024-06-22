import axios from "axios";
import {useEffect, useState} from "react";
import {Col, Form, FormCheck, FormGroup, Row} from "react-bootstrap";
import ImageGridImage from "../images/ImageGridImage";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import useSignOut from "react-auth-kit/hooks/useSignOut";

const ImageStatusBar = (props) => {

    let [imageStatus, setImageStatus] = useState({})
    const authHeader = useAuthHeader()

    const loadImageStatus = () => {
        axios.get(`api/rest/v1/image/${props.id.split(".")[0]}`, {headers: authHeader})
            .then(res => {
                setImageStatus(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        loadImageStatus()
        console.debug("ImageStatusBar rendered")
    }, [props.trigger]);

    return(
        <>
        <Row>
            <Form>
                <FormGroup>
                    <Form.Check type={"checkbox"} id={"publishedCheck"}>
                        <Form.Check.Input checked={imageStatus.published}></Form.Check.Input>
                        <Form.Check.Label>Published {imageStatus.published}</Form.Check.Label>
                    </Form.Check>
                </FormGroup>
            </Form>
        </Row>
        </>

    )
}

export default ImageStatusBar