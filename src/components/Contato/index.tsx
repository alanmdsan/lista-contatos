import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Icon } from '@iconify/react'

import * as S from './styles'
import ContatoModel from '../../models/Contato'
import { remover } from '../../store/reducers/contatos'

type Props = ContatoModel

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelaEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card isEditing={estaEditando}>
      <S.CardHeader>
        <h1
          contentEditable={estaEditando}
          onBlur={(evento) => setNome(evento.currentTarget.innerText)}
        >
          {nome}
        </h1>
        <div>
          {estaEditando ? (
            <>
              <Icon
                style={{ cursor: 'pointer' }}
                icon="line-md:confirm-circle"
                width="24"
                height="24"
              />
              <Icon
                style={{ cursor: 'pointer', marginLeft: '8px' }}
                icon="material-symbols:cancel-outline"
                width="24"
                height="24"
                onClick={cancelaEdicao}
              />
            </>
          ) : (
            <>
              <Icon
                style={{ cursor: 'pointer' }}
                icon="material-symbols:edit-outline"
                width="24"
                height="24"
                onClick={() => setEstaEditando(true)}
              />
              <Icon
                style={{ cursor: 'pointer', marginLeft: '8px' }}
                icon="mdi:trash-outline"
                width="24"
                height="24"
                onClick={() => dispatch(remover(id))}
              />
            </>
          )}
        </div>
      </S.CardHeader>
      <S.PhoneContainer>
        <Icon icon="ph:phone" width="24" height="24" />
        <h2
          contentEditable={estaEditando}
          onBlur={(evento) => setTelefone(evento.currentTarget.innerText)}
        >
          {telefone}
        </h2>
      </S.PhoneContainer>
      <S.MailContainer>
        <Icon icon="material-symbols:mail-outline" width="24" height="24" />
        <h2
          contentEditable={estaEditando}
          onBlur={(evento) => setEmail(evento.currentTarget.innerText)}
        >
          {email}
        </h2>
      </S.MailContainer>
    </S.Card>
  )
}

export default Contato
