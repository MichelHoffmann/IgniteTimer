import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../context/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <div>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          id="task"
          list="task-suggetions"
          placeholder="Dê um nome para o seu projeto"
          disabled={!!activeCycle}
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
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />

        <span>minutos</span>
      </div>
    </FormContainer>
  )
}
