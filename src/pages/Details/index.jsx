import "./style.css"
//import { Fragment } from "react"

// no react existe uma regra que diz que o componente só pode retornar um único elemento, porém se esse elemento for uma div, pode ser colocado dentro do elemento div vários outros elementos. Outro modo sem usar a div seria o Fragment que seria ao em vez de usar a div: <div> </div>, seria assim :<> </>, vazio mesmo, ou podendo importar o Fragment do próprio react, e ficaria assim: <Fragment> </Fragment>, ambos funcionariam como um pacote que embrulham os elementos. Pode ser usado qualquer um deles, a diferença entre a div e o fragment, tanto o inteiro quanto o vazio, é que eles não podem ser estilizados ao contrário da div que pode ser, ou seja, quando nenhum elemento precisar ser estilizado é melhor usar um dos fragments para carregar mais rápido 
export function Details() {
  
  return(
    <div>
      <h1>Hello World!</h1>
      <span>Konrad Hayashi</span>
    </div>
  )
}