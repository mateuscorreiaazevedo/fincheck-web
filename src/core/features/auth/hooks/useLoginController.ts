import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

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

  const handleSubmit = form.handleSubmit(async () => {});

  return {
    handleSubmit,
    control: form.control,
  };
}
