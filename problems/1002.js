export function problem (lines){
   const raio= Number(lines[0])
   const pi = 3.14159
   raio.toFixed([2])    
   const area = pi*raio**2
    
    console.log(`A=${area.toFixed(4)}`)
}   