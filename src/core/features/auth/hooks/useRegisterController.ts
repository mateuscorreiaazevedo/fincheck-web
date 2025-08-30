import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const MIN_LENGHT_PASSWORD = 8;

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

type RegisterSchemaType = z.infer<typeof registerSchema>;

export function useRegisterController() {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: RegisterSchemaType) => {
      // biome-ignore lint/style/noMagicNumbers: test
      await new Promise(resolve => setTimeout(resolve, 1000));

      // biome-ignore lint/suspicious/noConsole: test
      console.log('chegou', data);
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
  };
}
