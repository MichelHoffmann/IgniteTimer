import { useReducer } from 'react'

export function Home() {
    interface testeState {
        id: number
      }
      
      const [teste, dispatch] = useReducer((state: testeState, action: any) => {

        if (action.type === 'Acao_incrementar') {
          return {
            id: state.id + 1,
          }
        }
        if (action.type === 'Acao_decrementar') {
          return {
            id: state.id - 1,
          }
        }
        return state
      }, { id : 0})

      dispatch({
        type: 'Acao_incrementar',
        payload: {
            id: null,
        },
      })

    return ()
}
