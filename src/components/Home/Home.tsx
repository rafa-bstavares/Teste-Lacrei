import { ContainerGeral } from "../ContainerGeral"
import { PaginaGeral } from "../PaginaGeral"
import * as C from "./style"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { MainContainers } from "../MainContainers"
import { MainTituloDesc } from "../MainTituloDesc"
import { ImagemMain } from "../ImagemMain"
import imagemMain1 from "../../assets/rafiki 2.png"

type Props = {
    tituloTexto: string,
    width: string
}

export function Home({tituloTexto, width}: Props){

    return (
            <MainContainers>
                <MainTituloDesc tituloTexto={tituloTexto} width={width} pagina="1"></MainTituloDesc>
                <ImagemMain src={imagemMain1} />
            </MainContainers>
    )
}