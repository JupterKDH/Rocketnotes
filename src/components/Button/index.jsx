import { Container } from "./styles";

// colocar diretamente o({title}) no lugar do (props) e colocar só o {title} dentro do "Container"
// ou deixar (props) e colocar {props.title} no "Container"
export function Button({title, loading = false, ...rest}){
  return (
  <Container 
  type="button"
  disabled={loading}
  {...rest}
  >
    { loading ? 'Carregando...' : title}
  </Container>
  )
}