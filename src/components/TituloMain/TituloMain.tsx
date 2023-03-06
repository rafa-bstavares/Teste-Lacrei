import * as C from "./styled"

type Props = {
    tituloTexto: string,
    width: string
}

export function TituloMain({tituloTexto, width}: Props){
    return (
        <C.TituloMain style={{width: width}}>{tituloTexto}</C.TituloMain>
    )
}