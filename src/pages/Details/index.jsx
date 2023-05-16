import { useState, useEffect } from "react";
import { Container, Links, Content } from "./style.js";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Tag } from "../../components/Tag/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
//import { Fragment } from "react"

// no react existe uma regra que diz que o componente só pode retornar um único elemento, porém se esse elemento for uma div, pode ser colocado dentro do elemento div vários outros elementos. Outro modo sem usar a div seria o Fragment que seria ao em vez de usar a div: <div> </div>, seria assim :<> </>, vazio mesmo, ou podendo importar o Fragment do próprio react, e ficaria assim: <Fragment> </Fragment>, ambos funcionariam como um pacote que embrulham os elementos. Pode ser usado qualquer um deles, a diferença entre a div e o fragment, tanto o inteiro quanto o vazio, é que eles não podem ser estilizados ao contrário da div que pode ser, ou seja, quando nenhum elemento precisar ser estilizado é melhor usar um dos fragments para carregar mais rápido.
// CSS in JS : transformar o Css normal em um JS com o styled-components. 
export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);
  
  return(
    <Container>
      <Header/>
    {
      data &&
      <main>
        <Content>
          <ButtonText 
            title="Excluir nota"
            onClick={handleRemove}
          />

          <h1>{data.title}</h1>

          <p>{data.description}</p>

          { 
            data.links &&
            <Section title="Links úteis">
              <Links>
                {
                  data.links.map(link => (
                    <li key={String(link.id)}>
                      <a 
                        href={link.url}
                        target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))
                }
              </Links>
            </Section>
          }

          {
            data.tags &&
            <Section title="Marcadores">
              {
                data.tags.map(tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
              }
            </Section>
          }
          <Button 
            title="Voltar" 
            onClick={handleBack}
          />
        </Content>
      </main>
    }
    </Container>
  )
}