import {LogScreen} from "../components/LogScreen/LogScreen";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {SignUpScreen} from "../components/SignUpScreen/SignUpScreen";
import React from "react";
export function Application(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" index element = { <LogScreen/> } />
                <Route path="/signup" index element = { <SignUpScreen/> } />
            </Routes>
        </BrowserRouter>
    )
}