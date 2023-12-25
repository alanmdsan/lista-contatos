import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type EditingProps = {
  isEditing: boolean
}

function retornaCorCard(props: EditingProps): string {
  if (props.isEditing) return variaveis.editing_yellow
  else return variaveis.bittersweet
}

export const Card = styled.div<EditingProps>`
  background-color: ${(props) => retornaCorCard(props)};
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
