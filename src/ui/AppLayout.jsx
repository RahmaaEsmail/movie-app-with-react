import { Outlet } from "react-router-dom"
import Header from "./Header"
import styled from "styled-components"

const Main = styled.div`
        margin-top: 5rem;

`


function AppLayout() {
    return (
        <div>
            <Header/>
            <Main>
                
                 <Outlet/>
            </Main>
        </div>
    )
}

export default AppLayout
