import { useState } from "react";

export function BotonContador() {
    const [contador, setContador] = useState(0);
    
    function sumaAlClick(){
        setContador(contador+1);
    }
    
    return (
        <button onClick={sumaAlClick}>
            Hiciste click {contador} veces
        </button>
    );
}