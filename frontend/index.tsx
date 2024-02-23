import React from 'react'
import ReactDOM from "react-dom/client"
import {Application} from './pages/App'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev";

const root = ReactDOM.createRoot(document.querySelector('#application') as HTMLElement)

root.render(
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
        <Application/>
    </DevSupport>
)