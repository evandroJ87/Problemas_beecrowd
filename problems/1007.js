export function problem(lines){
    const NumberF=Number(lines[0]);
    const Hours=Number(lines[1]);
    const Payment=Number(lines[2]);

    const Salary=Hours*Payment;

    console.log(`NUMBER = ${NumberF}`);
    console.log(`SALARY = U$ ${Salary.toFixed(2)}`);
}