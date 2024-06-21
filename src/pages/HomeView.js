import ImageGrid from "../components/images/ImageGrid";
import LogoBanner from "../components/static/LogoBanner";

const HomeView = () => {

    return(
        <>
            <LogoBanner />
            <ImageGrid api={"/api/rest/v1/image/all?showAll=false"}/>
        </>
    )
}

export default HomeView