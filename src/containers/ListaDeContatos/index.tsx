import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Adicione } from './styles'
import Contato from '../../components/Contato'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <>
      {itens.length > 0 ? (
        itens.map((i) => (
          <Contato
            key={i.id}
            id={i.id}
            nome={i.nome}
            email={i.email}
            telefone={i.telefone}
          />
        ))
      ) : (
        <Adicione>Adicione contatos</Adicione>
      )}
    </>
  )
}

export default ListaDeContatos
