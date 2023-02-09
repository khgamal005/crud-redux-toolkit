import { Container } from "react-bootstrap"
import Header from "./Header"
import { Outlet } from "react-router-dom"




const LayoutRoot =()=>{



    return(
        <>
        <Container>
        <Header />
        <Outlet/>
        </Container>
        </>
    )
}

    export default LayoutRoot