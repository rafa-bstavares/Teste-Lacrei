import * as C from "./style"
import {Link} from "react-router-dom"



type Props = {
    styleContainerMenu?: {marginTop: string, height: string},
    styleMenuItem?: {fontWeight: string}

}

export function Menu({styleContainerMenu, styleMenuItem}: Props){


    
    return (
        <C.ContainerMenu style={styleContainerMenu ? styleContainerMenu : undefined}>
            <Link style={{textDecoration: "none", height: "100%"}} to="/"><C.MenuItem style={styleMenuItem? {...styleMenuItem} : undefined}>Home</C.MenuItem></Link>


            <Link style={{textDecoration: "none", height: "100%"}} to="/PessoaUsuaria"><C.MenuItem style={styleMenuItem? {...styleMenuItem} : undefined}>Pessoa Usuária</C.MenuItem></Link>


            <Link style={{textDecoration: "none", height: "100%"}} to="/Profissional"><C.MenuItem style={styleMenuItem? {...styleMenuItem} : undefined}>Profissional</C.MenuItem></Link>
        </C.ContainerMenu>
    )
}