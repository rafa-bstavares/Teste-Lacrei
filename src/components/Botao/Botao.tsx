import * as C from "./style"
import {Link} from "react-router-dom"

type Props = {
    botaoTexto: string,
    botaoCorFundo: string,
    botaoCorTexto: string
}

export function Botao({botaoTexto, botaoCorFundo, botaoCorTexto}: Props){
    return (
        <C.Botao style={{backgroundColor: botaoCorFundo}}><Link style={{color: botaoCorTexto, textDecoration: "none"}} to={botaoTexto == "Profissional"? "/Profissional" : "/PessoaUsuaria"}>{botaoTexto}</Link></C.Botao>
    )
}

/*

<C.Botao style={{color: botaoCorTexto, backgroundColor: botaoCorFundo}}><Link>{botaoTexto}</Link></C.Botao>
*/