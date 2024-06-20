import {Col, Row} from "react-bootstrap";

const LogoBanner = () => {
    return(
        <>
            <Row className={"py-3"}>
                <Col><h1 className={"mx-auto"} style={{width: "fit-content"}}>Logo</h1></Col>
            </Row>
        </>
    )
}

export default LogoBanner