import {useState} from "react";

import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section"
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function New(){
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }
  
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título"/>

          <Textarea placeholder="Observações"/>

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem 
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }

            <NoteItem 
              isNew  
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
              

          </Section>

          <Section title="Marcadores">
            <div className="tags">
            <NoteItem value="react"/>
            <NoteItem isNew placeholder="Novo marcador"/>

            </div>
          </Section>

          <Button title="Salvar"/>

        </Form>
      </main>
    </Container>
  )
}