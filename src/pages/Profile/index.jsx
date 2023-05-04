import {useState} from "react"

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";

import { Container, Form, Avatar } from "./styles";
import { Button } from "../../components/Button";

export function Profile(){
  const {user} = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();
 

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
          src="https://github.com/JupterKDH.png" 
          alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera/>

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Senha nova"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
  )  
}