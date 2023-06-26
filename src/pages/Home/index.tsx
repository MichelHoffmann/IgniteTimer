import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeComtainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeComtainer>
      <form action="">
        <FormContainer>
          <div>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
              type="text"
              name=""
              id="task"
              placeholder="Dê um nome para o seu projeto"
              list="task-suggetions"
            />

            <datalist id="task-suggetions">
              <option value="Teste 1" />
              <option value="Teste 007" />
              <option value="Catioro" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
              type="number"
              id="minutesAmount"
              placeholder="00"
              step={5}
              min={5}
              max={60}
            />

            <span>minutos</span>
          </div>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled type="submit">
          <Play />
          Começar
        </StartCountDownButton>
      </form>
    </HomeComtainer>
  )
}
