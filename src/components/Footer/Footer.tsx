import * as C from "./style"
import {Menu} from "../Menu"
import LogoFacebook from "../../assets/FacebookLogo.png"
import LogoInstagram from "../../assets/InstagramLogo.png"
import LogoLinkedin from "../../assets/LinkedinLogo.png"


export function Footer(){
    return (
        <C.Footer>
          <C.Container>
            <C.FooterArea>
              <Menu styleContainerMenu={{marginTop: "3.2rem", height: "auto"}} styleMenuItem={{fontWeight: "400"}}/>
              <C.IconsArea>
                <C.Icons src={LogoFacebook}/>
                <C.Icons src={LogoInstagram}/>
                <C.Icons src={LogoLinkedin}/>
              </C.IconsArea>
              <C.CopyDesafio>Desafio Front-end Lacrei</C.CopyDesafio>
            </C.FooterArea>
          </C.Container>
        </C.Footer>
    )
}