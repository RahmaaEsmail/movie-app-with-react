import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

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
