import * as C from "./style"

type Props = {
    texto: string
}

export function DescMain2({texto}: Props){
    return (
        <C.DescMain2Container>
            <C.Barra></C.Barra>
            <C.textoDesc2>{texto}</C.textoDesc2>
        </C.DescMain2Container>
    )
}