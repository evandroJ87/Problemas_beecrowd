export function problem(lines){
    const A=Number(lines[0]);
    const B=Number(lines[1]);
    const C=Number(lines[2]);
    const D=Number(lines[3]);

    const DIFERENCA = (A * B - C * D);

    console.log(`DIFERENCA = ${DIFERENCA}`);
}