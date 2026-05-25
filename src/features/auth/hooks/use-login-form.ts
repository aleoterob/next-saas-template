'use client';

import { useState } from 'react';
import type { ComponentProps } from 'react';
import { useForm } from '@tanstack/react-form';

import {
  loginSchema,
  type LoginFormValues,
} from '@/features/auth/schemas/login.schema';
import { authService } from '@/features/auth/services/auth.service';

type FormSubmitEvent = Parameters<
  NonNullable<ComponentProps<'form'>['onSubmit']>
>[0];

export function useLoginForm() {
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    } satisfies LoginFormValues,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      setServerError(null);

      try {
        await authService.login(value);
      } catch {
        setServerError('No pudimos iniciar sesion. Revisa tus credenciales.');
      }
    },
  });

  const handleSubmit = (event: FormSubmitEvent) => {
    event.preventDefault();
    event.stopPropagation();
    void form.handleSubmit();
  };

  return {
    form,
    handleSubmit,
    serverError,
  };
}
