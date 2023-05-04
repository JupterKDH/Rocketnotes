import { useAuth } from '../../hooks/auth';
import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
  const {signOut} = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img 
        src="https://github.com/JupterKDH.png"
        alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Konrad Hayashi</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
      
    </Container>
  );
}