import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../contexts/Cycles.context'

export function NewCycleForm() {
  const { activeCycle, activeCycleId } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        type="text"
        placeholder="Dê um nome para seu projeto..."
        disabled={!!activeCycleId}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Estudar React" />
        <option value="Estudar Java" />
        <option value="Estudar JavaScript" />
      </datalist>

      <label htmlFor="minutesAmount">Durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycleId}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
