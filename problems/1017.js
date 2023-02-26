export function problem(lines){
    const tempo = Number(lines[0]);
    const velocidade = Number(lines[1]);

    const combustivel = (tempo*velocidade)/12;

    console.log(combustivel.toFixed(3));
}