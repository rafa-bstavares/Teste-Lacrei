import * as C from "./style"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function MainContainers({children}: Props){
    return (
        <C.Main>
            <C.Container>
                <C.ContainerMain>
                    {children}
                </C.ContainerMain>
            </C.Container>
        </C.Main>
    )
}



/*
<C.ContainerTituloDesc>
                        <TituloMain tituloTexto={tituloTexto} width={width}></TituloMain>
                        {width != "auto" ?
                            <DescMain1></DescMain1>
                            :
                            <DescMain2></DescMain2>
                        }
                    </C.ContainerTituloDesc>

*/