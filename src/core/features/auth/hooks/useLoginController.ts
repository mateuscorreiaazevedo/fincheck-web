import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { authService } from '../services/HttpClientAuthService';
import { tokensUtil } from '../utils/tokensUtil';

const MIN_LENGHT_PASSWORD = 8;

const loginSchema = z.object({
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
    .min(MIN_LENGHT_PASSWORD, {
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

type LoginSchemaType = z.infer<typeof loginSchema>;

export function useLoginController() {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: LoginSchemaType) => authService.login(data),
    onSuccess: ({ accessToken, refreshToken }) => {
      tokensUtil.setTokens({
        accessToken,
        refreshToken,
      });
    },
  });

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = form.handleSubmit(data => mutateAsync(data));

  return {
    handleSubmit,
    control: form.control,
    showPassword,
    handleTogglePassword,
    isPending,
    error,
  };
}
