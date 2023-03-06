import { ContainerGeral } from "../ContainerGeral"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { MainContainers } from "../MainContainers"
import { MainTituloDesc } from "../MainTituloDesc"
import { ImagemMain } from "../MainContainers/style"
import imagemMain3 from "../../assets/profissional 1.png"


type Props = {
    tituloTexto: string,
    width: string
}



export function Profissional({tituloTexto, width}: Props){
    return (
            <MainContainers>
                <MainTituloDesc tituloTexto={tituloTexto} width={width} pagina="3"></MainTituloDesc>
                <ImagemMain src={imagemMain3}></ImagemMain>
            </MainContainers>
    )
} 