import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import z from 'zod';
import { throwException } from '@/shared';
import { MIN_LENGTH_PASSWORD } from '../constants/minLengthPassword';
import { authService } from '../services/httpClientAuthService';
import { useAuth } from './useAuth';

const registerSchema = z.object({
  firstName: z.string({ error: 'Nome é obrigatório' }),
  lastName: z.string({ error: 'Sobrenome é obrigatório' }),
  email: z
    .email({
      error: iss =>
        iss.input === undefined
          ? 'E-mail é obrigatório'
          : 'Endereço de E-mail inválido',
    })
    .nonempty({ error: 'E-mail é obrigatório' }),
  password: z
    .string({ error: 'Senha é obrigatório' })
    .min(MIN_LENGTH_PASSWORD, {
      error: 'A senha deve ter no mínimo 8 caracteres',
    })
    .regex(/[A-Z]/, {
      error: 'A senha deve conter no mínimo 1 caractere maiúsculo',
    })
    .regex(/[a-z]/, {
      error: 'A senha deve conter no mínimo 1 caractere minúsculo',
    })
    .regex(/[0-9]/, {
      error: 'A senha deve conter no mínimo 1 número',
    })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'A senha deve conter no mínimo 1 caractere especial',
    }),
});

type RegisterSchemaType = z.infer<typeof registerSchema>;

export function useRegisterController() {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const { signin } = useAuth();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: RegisterSchemaType) => authService.register(data),
    onSuccess: ({ accessToken, refreshToken }) => {
      signin(accessToken, refreshToken);
    },
  });

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = form.handleSubmit(async data => {
    await toast.promise(mutateAsync(data), {
      loading: 'Criando sua conta...',
      success: 'Bem-vindo ao Fincheck!',
      error: err => throwException(err),
    });
  });

  return {
    handleSubmit,
    register: form.register,
    fieldErrors: form.formState.errors,
    showPassword,
    handleTogglePassword,
    isPending,
  };
}
