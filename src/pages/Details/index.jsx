import {Container, Links, Content} from "./style.js"

import { Tag } from "../../components/Tag/index.jsx"
import { Header } from "../../components/Header/index.jsx"
import { Button } from "../../components/Button/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"
//import { Fragment } from "react"

// no react existe uma regra que diz que o componente só pode retornar um único elemento, porém se esse elemento for uma div, pode ser colocado dentro do elemento div vários outros elementos. Outro modo sem usar a div seria o Fragment que seria ao em vez de usar a div: <div> </div>, seria assim :<> </>, vazio mesmo, ou podendo importar o Fragment do próprio react, e ficaria assim: <Fragment> </Fragment>, ambos funcionariam como um pacote que embrulham os elementos. Pode ser usado qualquer um deles, a diferença entre a div e o fragment, tanto o inteiro quanto o vazio, é que eles não podem ser estilizados ao contrário da div que pode ser, ou seja, quando nenhum elemento precisar ser estilizado é melhor usar um dos fragments para carregar mais rápido.
// CSS in JS : transformar o Css normal em um JS com o styled-components. 
export function Details() {
  
  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>Introdução ao React</h1>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          <Section title="Links úteis">
           <Links>
             <li><a href="#">Link 1</a></li>
             <li><a href="#">Link 2</a></li>
             <li><a href="#">Link 3</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
     
    </Container>
  )
}