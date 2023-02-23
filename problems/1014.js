export function problem(lines){
    const distancia = Number(lines[0]);
    const consumo = Number(lines[1]);

    const media = (distancia/consumo);

    console.log(`${media.toFixed(3)} km/l`);
}