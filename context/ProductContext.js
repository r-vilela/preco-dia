import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
    const [prod, setProd] = useState({
        nome: "",
        preco: "",
        descricao: "",
        image: "",
        usuario: "",
        categoriaId: "",
        locaId: "",
    })

    return(
        <StateContext.Provider value={[prod, setProd]}>
            {props.children}
        </StateContext.Provider>
    )
}


