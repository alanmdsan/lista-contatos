import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Alan Santos',
      email: 'alan@gmail.com',
      telefone: '(32) 98460-4379'
    },
    {
      id: 2,
      nome: 'Samira Silva',
      email: 'samira@gmail.com',
      telefone: '(32) 98461-7384'
    },
    {
      id: 3,
      nome: 'Mariana Almeida',
      email: 'mariana@gmail.com',
      telefone: '(32) 99834-2301'
    },
    {
      id: 4,
      nome: 'Wagner Tiso',
      email: 'wagner@gmail.com',
      telefone: '(32) 98087-1123'
    },
    {
      id: 5,
      nome: 'Roberta Silva',
      email: 'roberta@gmail.com',
      telefone: '(33) 98440-2370'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
