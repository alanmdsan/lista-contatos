import { Icon } from '@iconify/react'
import * as S from './styles'

const Contato = () => {
  return (
    <S.Card>
      <S.CardHeader>
        <h1>Alan Santos</h1>
        <div>
          <Icon
            style={{ cursor: 'pointer' }}
            icon="material-symbols:edit-outline"
            width="24"
            height="24"
          />
        </div>
      </S.CardHeader>
      <S.PhoneContainer>
        <Icon icon="ph:phone" width="24" height="24" />
        <h2>(32) 98594-3433</h2>
      </S.PhoneContainer>
      <S.MailContainer>
        <Icon icon="material-symbols:mail-outline" width="24" height="24" />
        <h2>alan@gmail.com</h2>
      </S.MailContainer>
    </S.Card>
  )
}

export default Contato
