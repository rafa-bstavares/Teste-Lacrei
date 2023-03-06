import * as C from "./style"
import { Menu } from "../Menu"


export function Header(){
    return (
        <C.Header>
          <C.Container>
            <C.HeaderArea>
              <C.Logo>Lacrei</C.Logo>
              <Menu/>
            </C.HeaderArea>
          </C.Container>
        </C.Header>
    )
}