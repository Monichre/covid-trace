import * as React from 'react'
import Cards from 'react-credit-cards'
import { useForm } from 'react-hook-form'
import {
  Divider,
  Input,
  Fieldset,
  Button,
  Select,
  Row,
  Spacer,
  Dot,
  Text,
  ButtonGroup,
  Col,
  Modal,
} from '@geist-ui/react'
export interface CreditCardFormProps {}

export const CreditCardForm: React.SFC<CreditCardFormProps> = () => {
  const { register, handleSubmit, errors, setValue, watch } = useForm<
    FormData
  >()

  const watchCvc = watch('cvc')
  const watchExpiry = watch('expiry')
  const watchName = watch('name')
  const watchCCNumber = watch('ccNumber')

  return (
    <div id='PaymentForm'>
      <Cards
        cvc={watchCvc}
        expiry={watchExpiry}
        name={watchName}
        number={watchCCNumber}
      />
      <form>
        <Input ref={register({ required: true })} name='cvc'>
          CVC
        </Input>
        <Input ref={register({ required: true })} name='expiry'>
          expiry
        </Input>
        <Input ref={register({ required: true })} name='name'></Input>
        <Input ref={register({ required: true })} name='ccNumber'>
          Number
        </Input>
      </form>
    </div>
  )
}
