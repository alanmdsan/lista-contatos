import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: ${variaveis.bittersweet};
  color: ${variaveis.white};
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 16px;

  h1 {
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 8px;
    margin-left: 8px;
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PhoneContainer = styled.div`
  display: flex;
`

export const MailContainer = styled.div`
  display: flex;
`
