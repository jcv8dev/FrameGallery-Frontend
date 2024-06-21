import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import LogoBanner from "../../components/static/LogoBanner";
import ImageGrid from "../../components/images/ImageGrid";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {useEffect, useState} from "react";
import GenericModal from "../../components/forms/GenericModal";

const AdminView = () => {

    const signOut = useSignOut()
    const authToken = useAuthHeader();
    const [gridTrigger, setGridTrigger] = useState(0)

    const logout = () => {
        signOut()
        window.location.reload()
    }

    const fetchOrphans = () => {
        let orphans
        axios.get("/api/rest/v1/image/orphans", {headers: {Authorization: authToken}}).then(res => {
            orphans = res.data
        }).catch(err => {
            console.error(err)
        })
        return orphans
    }

    const triggerReIndex = () => {
        let orphans
        axios.post("/api/rest/v1/image/orphans/index", {}, {headers: {Authorization: authToken}}).then(res => {
            orphans = res.data
        }).catch(err => {
            console.error(err)
        })
        return orphans
    }

    useEffect(() => {

    }, []);

    const imageClickHandler = (event) => {
        let path = event.target.src
        let filename = path.split("/")
        let id = filename[filename.length-1]
        window.location = `/admin/${id}/edit`
    }

    const uploadHandler = () => {
        console.log("Upload")
        let formData = new FormData()
        let imageFile = document.querySelector("#file")
        formData.append("image", imageFile.files[0])
        axios.put("/api/rest/v1/image/add", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: authToken
            }
        })
            .then(r => {
                console.log("Rerender Grid?")
                setGridTrigger(prevGridTrigger => prevGridTrigger + 1);
            })
            .catch()
    }

    return(
        <>
            <LogoBanner />
            <Row className={"pb-3"}>
                <Col className={"mx-auto"}>
                    <GenericModal showButtonText={"Upload"} titleText={"Upload a new image"} saveButtonText={"Upload"} saveHandler={uploadHandler}>
                        <Form>
                            <InputGroup>
                                <input type={"file"} id={"file"} name={"file"}/>
                            </InputGroup>
                        </Form>
                    </GenericModal>
                </Col>
                <Col className={"mx-auto"}>
                    <Button className={"w-100"} onClick={triggerReIndex}>Index</Button>
                </Col>
                <Col className={"mx-auto"}>
                    <Button className={"w-100"} onClick={logout}>Logout</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={10}className={"mx-auto"}>
                    <p className={"fst-italic text-center"}>Click on an image to edit its metadata and visibility</p>
                </Col>
            </Row>
            <Row>
                <ImageGrid trigger={gridTrigger} api={"/api/rest/v1/image/all?showAll=true"} clickHandler={imageClickHandler}/>
            </Row>
        </>
    )
}

export default AdminView