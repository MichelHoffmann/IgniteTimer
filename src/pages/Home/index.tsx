import { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeComtainer } from './styles'

export function Home() {
  return (
    <HomeComtainer>
      <form action="">
        <FormContainer>
          <div>
            <label htmlFor="task">Vou trabalhar em</label>
            <input type="text" name="" id="task" />

            <label htmlFor="">durante</label>
            <input type="number" id="minutesAmount" />

            <span>minutos</span>
          </div>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play />
          Começar
        </button>
      </form>
    </HomeComtainer>
  )
}
