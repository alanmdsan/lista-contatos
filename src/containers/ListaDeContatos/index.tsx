import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../components/Contato'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <>
      {itens.map((i) => (
        <Contato
          key={i.id}
          id={i.id}
          nome={i.nome}
          email={i.email}
          telefone={i.telefone}
        />
      ))}
    </>
  )
}

export default ListaDeContatos
