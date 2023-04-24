import styled from "styled-components";
import { Button } from ".";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border: 0;
  border-radius: 1rem;
  padding: 0 1.6rem;
  margin-top: 1.6rem;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`