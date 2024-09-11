//una ves que el evento se origina , tiene una propagacion a lo largo del arbol. casi siempre es de lo mas interno a lo mas externo



const $divsEventos = document.querySelectorAll(".eventos-flujos div");
function flujoEventos(e){
    console.log(`hola te saluda ${this.className}, el clik lo origino ${e.target.className} `);
    
}
// console.log($divsEventos);
// $divsEventos.forEach(div =>{
//     div.addEventListener("click",flujoEventos,{
//         capture: false,
//         once:true,
//     })// el addEventL tiene un tercer para metro , false(fase de burbuja) o true (fase de captura)  
// })
console.log($divsEventos);

$divsEventos.forEach((div) =>{
    div.addEventListener("clik",flujoEventos);
})
