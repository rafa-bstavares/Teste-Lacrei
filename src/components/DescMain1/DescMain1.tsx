import * as C from "./style"
import { Botao } from "../Botao"


export function DescMain1(){
    return (
        <C.DescMain1Container>
            <C.Desc>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</C.Desc>
            <C.BotaoContainer>
                <Botao botaoTexto="Pessoa Usuária" botaoCorFundo="#018762" botaoCorTexto="#fff"/>
                <Botao botaoTexto="Profissional" botaoCorFundo="#fff" botaoCorTexto="#018762"/>
            </C.BotaoContainer>
        </C.DescMain1Container>
    )
}