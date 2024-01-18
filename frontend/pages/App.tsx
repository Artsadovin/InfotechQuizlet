import { ClickCount } from "../components/ClickCount/ClickCount"
import { Button } from "../components/button/Button"

import { Menu } from "../components/hookTest/Menu"
export function Application(){
    return (
    <div>
        <Button text="pfuise" OnClick={() => {}}/>
        <Menu></Menu>
        <ClickCount/>
    </div>
    )
}