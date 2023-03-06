import * as C from "./style"
import { TituloMain } from "../TituloMain"
import { DescMain1 } from "../DescMain1"
import { DescMain2 } from "../DescMain2"


type Props = {
    tituloTexto: string,
    width: string,
    pagina: string
}


export function MainTituloDesc({tituloTexto, width, pagina}: Props){7

    let textoPagina2 = "A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."

    let textoPagina3 = "A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."

    return(
        <>
            <C.ContainerTituloDesc>
                <TituloMain tituloTexto={tituloTexto} width={width}></TituloMain>
                {width != "auto" ?
                    <DescMain1></DescMain1>
                    :
                    <DescMain2 texto={pagina == "2"? textoPagina2 : textoPagina3}></DescMain2>
                }
            </C.ContainerTituloDesc>
        </>
)
}