import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${variaveis.sage}
  }
`

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width 960px;
`

export default EstiloGlobal
