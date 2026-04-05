const jugadores = [
    { nombre: 'Orlando', apellido: 'Gill', posicion: 'arquero', id: 1 },
    { nombre: 'Johan', apellido: 'Romaña', posicion: 'defensa', id: 2 },
    { nombre: 'Gaston', apellido: 'Hernandez', posicion: 'defensa', id: 3 },
];

export function JugadoresFutbol() {
        const listaJugadores = jugadores.map(jugadores =>
            <li
            key={jugadores.id}
            style={{
                color: jugadores.posicion == 'arquero' ? 'blue' : 'red'
            }}
            >   
                {jugadores.nombre} {jugadores.apellido}
            </li>
        );
    return (
        <ul>{listaJugadores}</ul>
    );
}