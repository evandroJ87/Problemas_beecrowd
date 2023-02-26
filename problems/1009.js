export function problem(lines){
    const [nome, salary, comission] = lines;
    const valueComission = 0.15
    const salaryTotal = (+comission*valueComission)+ +salary;
    console.log(`TOTAL = R$ ${salaryTotal.toFixed(2)}`);
}