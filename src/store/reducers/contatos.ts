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
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.email.toLowerCase() === action.payload.email.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com este email')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
