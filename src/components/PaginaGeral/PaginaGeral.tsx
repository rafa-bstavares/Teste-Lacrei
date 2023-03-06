import { Header } from "../Header"
import { Footer } from "../Footer"
import { MainContainers } from "../MainContainers"

type Props = {
    tituloTexto: string,
    width: string
}

export function PaginaGeral({tituloTexto, width}: Props){
    return (
        <>
            <Header/>
            <MainContainers>

            </MainContainers>
            <Footer/>
        </>
    )
}