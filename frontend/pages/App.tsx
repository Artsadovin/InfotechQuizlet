import {LogScreen} from "../components/LogScreen/LogScreen";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {SignUpScreen} from "../components/SignUpScreen/SignUpScreen";
import React from "react";
import {MainScreen} from "../components/MainScreen/MainScreen";
export function Application(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" index element = { <LogScreen/> } />
                <Route path="/signup" index element = { <SignUpScreen/> } />
                <Route path="/main" index element = { <MainScreen/> } />
            </Routes>
        </BrowserRouter>
    )
}