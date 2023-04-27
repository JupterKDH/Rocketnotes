import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section"
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function New(){
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
            <NoteItem value="teste"/>
            <NoteItem isNew  placeholder="Novo link"/>

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