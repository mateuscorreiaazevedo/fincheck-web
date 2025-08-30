import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { type LoginSchemaType, loginSchema } from '@/core/features/auth';

export function useLoginController() {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = form.handleSubmit(async () => {});

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return {
    handleSubmit,
    control: form.control,
    showPassword,
    handleTogglePassword,
  };
}
