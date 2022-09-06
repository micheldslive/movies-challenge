import { useCart } from '@/contexts'
import CartItem from '@/components/minicart/item'
import React, { useState } from 'react'
import { CheckoutFooter } from './footer'
import ReactInputMask from 'react-input-mask'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ICheckoutContext } from '@/core/types'
import { useNavigate } from 'react-router-dom'
import { useCheckout } from '@/contexts/checkout'
import { toast } from 'react-toastify'

const CheckoutForm = () => {
  const { cart, removeAll } = useCart()
  const { name, address, cep, city, cpf, email, phone, state, setState } =
    useCheckout()
  const [loading, setLoading] = useState<boolean>(false)
  const { handleSubmit, register } = useForm<ICheckoutContext>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<ICheckoutContext> = async (data) => {
    setLoading(true)
    toast.success(
      `${data.name}, sua compra realizada com sucesso, voltando para home...`,
    )
    await new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      setState(data)
      removeAll()
      setLoading(false)
      navigate('/')
    })
  }

  return (
    <form className='checkout-container' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className='form-content'>
          <div className='one-columns'>
            <div>
              <input
                type='text'
                placeholder='Nome Completo'
                pattern='[a-zA-Z ]+$'
                required={true}
                defaultValue={name}
                {...register('name')}
              />
            </div>
          </div>
          <div className='two-columns'>
            <div>
              <ReactInputMask
                mask={'999.999.999-99'}
                placeholder='CPF'
                defaultValue={cpf}
                {...register('cpf', { required: true })}
              />
            </div>
            <div>
              <ReactInputMask
                mask={'(99) 99999-9999'}
                placeholder='CELULAR'
                defaultValue={phone}
                {...register('phone', { required: true })}
              />
            </div>
          </div>
          <div className='one-columns'>
            <div>
              <input
                type='email'
                placeholder='E-mail'
                required={true}
                defaultValue={email}
                {...register('email')}
              />
            </div>
          </div>
          <div className='address-columns'>
            <div>
              <ReactInputMask
                mask='99999-999'
                placeholder='CEP'
                required={true}
                defaultValue={cep}
                {...register('cep')}
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='Endereço'
                required={true}
                defaultValue={address}
                {...register('address')}
              />
            </div>
          </div>
          <div className='two-columns'>
            <div>
              <input
                type='text'
                placeholder='Cidade'
                required={true}
                defaultValue={city}
                {...register('city')}
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='Estado'
                required={true}
                defaultValue={state}
                {...register('state')}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='cart-content'>
          <div className='cartItems-container'>
            {cart.length ? (
              cart.map((item) => (
                <React.Fragment key={item.id.toString()}>
                  <CartItem item={item} />
                </React.Fragment>
              ))
            ) : (
              <span className='empty-content'>Carrinho vazio</span>
            )}
          </div>
          <CheckoutFooter loading={loading} />
        </div>
      </div>
    </form>
  )
}

export default CheckoutForm
