import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../components/homepage";
import { InfoGit } from "./infoGit";


const AppRoutes = () => {

    return (

        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={<HomePage/>}/>
                <Route path="/:userName" element={<InfoGit/>}/>

            </Routes>
        
        </BrowserRouter>

    )

}

export { AppRoutes }