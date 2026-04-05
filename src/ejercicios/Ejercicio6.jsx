export function BotonContadorActivo({ contador, onClick }) {

    return (
        <button onClick={onClick}>
            Hiciste click {contador} veces
        </button>
    );
}