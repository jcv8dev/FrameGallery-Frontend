import {Button, Col, Row} from "react-bootstrap";
import LogoBanner from "../../components/static/LogoBanner";
import ImageGrid from "../../components/images/ImageGrid";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {useEffect} from "react";

const AdminView = () => {

    const signOut = useSignOut()
    const authToken = useAuthHeader();

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

    return(
        <>
            <LogoBanner />
            <Row className={"pb-3"}>
                <Col className={"mx-auto"}>
                    <Button className={"w-100"} onClick={() => {window.location = "/admin/ingest"}}>Upload</Button>
                </Col>
                <Col className={"mx-auto"}>
                    <Button className={"w-100"} onClick={triggerReIndex}>Index</Button>
                </Col>
                <Col className={"mx-auto"}>
                    <Button className={"w-100"} onClick={logout}>Logout</Button>
                </Col>

            </Row>
            <Row>
                <Col xs={10} sm={8} md={4} className={"mx-auto"}>
                    <p className={"fst-italic"}>Click on an image to edit it's metadata and visibility</p>
                </Col>
            </Row>
            <Row>
                <ImageGrid />
            </Row>
        </>
    )
}

export default AdminView