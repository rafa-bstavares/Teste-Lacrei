import * as C from "./style"
import { ContainerGeral } from "../ContainerGeral"
import { Container } from "../../AppStyles"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { MainContainers } from "../MainContainers"
import { MainTituloDesc } from "../MainTituloDesc"
import { ImagemMain } from "../MainContainers/style"
import imagemMain2 from "../../assets/rafiki 1.png"


type Props = {
    tituloTexto: string,
    width: string
}


export function PessoaUsuaria({tituloTexto, width}: Props){
    return (
            <MainContainers>
                <MainTituloDesc tituloTexto={tituloTexto} width={width} pagina="2"></MainTituloDesc>
                <ImagemMain src={imagemMain2}></ImagemMain>
            </MainContainers>
    )
}