import {LogScreen} from "../components/LogScreen/LogScreen.tsx";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

export function Application(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" index element = { <LogScreen/> } />

            </Routes>
        </BrowserRouter>
    )
}