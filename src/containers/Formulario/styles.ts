import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 480px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.dark_slate_gray};
`

export const Titulo = styled.h1`
  margin: 40px 0 24px;
  font-size: 20px;
  font-weight: bold;
  color: ${variaveis.dark_slate_gray};
`

export const Campo = styled.input`
  padding: 12px;
  background-color: ${variaveis.white};
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.dark_slate_gray};
  border: none;
  width: 100%;
  margin-top: 16px;
`

export const Botao = styled.button`
  padding: 12px;
  color: ${variaveis.white};
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.zomp};
  border-radius: 8px;
  margin-top: 16px;
`
