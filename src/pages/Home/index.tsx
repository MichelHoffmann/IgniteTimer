import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data) {}

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeComtainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <div>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
              id="task"
              list="task-suggetions"
              placeholder="Dê um nome para o seu projeto"
              {...register('task')}
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
              {...register('minutesAmount', { valueAsNumber: true })}
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

        <StartCountDownButton disabled={isSubmitDisable} type="submit">
          <Play />
          Começar
        </StartCountDownButton>
      </form>
    </HomeComtainer>
  )
}
