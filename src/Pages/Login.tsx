import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

const inputForm = z
  .object({
    email: z.string().email({ message: 'Email inválido, por favor digite un email válido.' }),
    password: z.string().min(8, { message: 'Debe contener mínimo 8 caracteres.' }).max(18, { message: 'Debe contener máximo 18 caracteres.' }),
  })
  .refine((data) => !emailRegex.test(data.password), {
    message: 'Email inválido, por favor digite un email válido',
    path: ['email'],
  })

type Inputs = z.infer<typeof inputForm>

export default function Login() {
  const [error, setError] = useState<{ emailError?: string; passwordError?: string }>({})
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(inputForm) })

  const onSubmit = (data: Inputs) => {
    localStorage.setItem('user-data', JSON.stringify(data))
    navigate('/home')
  }

  useEffect(() => {
    const message: { emailError?: string; passwordError?: string } = {}

    if (errors.email) {
      message.emailError = errors.email.message
    }

    if (errors.password) {
      message.passwordError = errors.password.message
    }

    setError(message)
  }, [errors])

  return (
    <section className="min-h-screen grid place-content-center bg-[#222] px-5 relative">
      <p className="fixed top-0 left-0 m-5 font-bold text-white">MediaStreamWeb</p>
      <form method="post" className="grid p-6 bg-white md:p-12 rounded-xl place-content-center" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold text-center md:text-3xl">Inicia sesión</h2>

        <label className={`mt-10 ${error.emailError && 'text-red-500'}`}>Correo Electrónico</label>
        <input type="email" id="email" placeholder="ejemplo@ejemplo.com" className={`py-2 px-5 w-[20rem] rounded-lg outline-none border ${error.emailError && 'border-red-500 text-red-500'}`} {...register('email')} autoComplete="email" />
        <p className="text-sm text-red-500">{error.emailError}</p>

        <label className={`mt-5 ${error.passwordError && 'text-red-500'}`}>Contraseña</label>
        <input type="password" id="password" placeholder="*********" className={`py-2 px-5 w-[20rem] rounded-lg outline-none border ${error.passwordError && 'border-red-500 text-red-500'}`} {...register('password')} autoComplete="password" />
        <p className="text-sm text-red-500">{error.passwordError}</p>

        <button className="py-2 mt-5 text-white bg-blue-500 rounded-lg " type="submit">
          Iniciar sesión
        </button>
      </form>
    </section>
  )
}
