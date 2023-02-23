export function problem(lines){
    const a=Number(lines[0]);
    const b=Number(lines[1]);
    const c=Number(lines[2]);
    const d=Number(lines[3]);

    const distancia = Math.sqrt(Math.pow((a-c), 2)+Math.pow((b-d),2));

    console.log(distancia.toFixed(4));
}