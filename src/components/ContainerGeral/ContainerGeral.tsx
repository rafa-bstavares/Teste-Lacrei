import { ReactNode } from "react"
import * as C from "./style"

type Props = {
    children: ReactNode
}

export function ContainerGeral({children}: Props){
    return (
        <C.ContainerGeral>
            {children}
        </C.ContainerGeral>
    )
}