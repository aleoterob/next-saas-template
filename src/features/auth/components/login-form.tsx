'use client';

import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { LoginBrandSeparator } from '@/features/auth/components/login-brand-separator';
import { useLoginForm } from '@/features/auth/hooks/use-login-form';
import { getErrorMessage } from '@/features/auth/utils/error-message';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/shared/components/ui/field';
import { Input } from '@/shared/components/ui/input';
import { cn } from '@/shared/utils/cn';

type LoginFormProps = React.ComponentProps<'div'>;

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { form, handleSubmit, serverError } = useLoginForm();

  return (
    <div
      className={cn(
        'flex w-full min-w-0 flex-col gap-3 rounded-xl bg-transparent text-primary-foreground md:gap-6 lg:gap-4',
        className,
      )}
      {...props}
    >
      <Card
        size="sm"
        className={cn(
          'glass-panel',
          'text-primary-foreground max-md:gap-3 max-md:py-3 lg:gap-4 lg:py-4',
        )}
      >
        <CardHeader className="text-center max-md:space-y-0 max-md:pt-2 max-md:pb-1 lg:gap-0.5 lg:px-5 lg:pt-1">
          <CardTitle className="text-lg text-primary-foreground md:text-xl">
            Next Saas Template
          </CardTitle>
          <CardDescription className="text-primary-foreground/85 max-md:text-xs md:text-sm">
            Ingresa con tu email y contraseña
          </CardDescription>
        </CardHeader>
        <CardContent className="max-md:px-4 max-md:pb-3 lg:px-5 lg:pb-1">
          <form noValidate onSubmit={handleSubmit}>
            <FieldGroup className="gap-3 md:gap-4 lg:gap-4">
              <LoginBrandSeparator className="h-7 md:h-10 lg:h-8" />

              <form.Field name="email">
                {(field) => {
                  const error = getErrorMessage(field.state.meta.errors[0]);

                  return (
                    <Field className="gap-1.5 md:gap-2 lg:gap-2">
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="email"
                        value={field.state.value}
                        placeholder="m@example.com"
                        autoComplete="email"
                        aria-invalid={error ? true : undefined}
                        aria-describedby={error ? 'email-error' : undefined}
                        className={cn(
                          'border',
                          'border-primary-foreground/35',
                          'login-glass-input h-9 rounded-md bg-lua-dark-blue/40 text-primary-foreground shadow-xs transition-[color,box-shadow] placeholder:text-primary-foreground/50',
                          'aria-invalid:border-primary-foreground/35 aria-invalid:ring-ring/50',
                        )}
                        onBlur={field.handleBlur}
                        onChange={(event) =>
                          field.handleChange(event.target.value)
                        }
                      />
                      {error && (
                        <p id="email-error" className="text-xs text-red-400">
                          {error}
                        </p>
                      )}
                    </Field>
                  );
                }}
              </form.Field>

              <form.Field name="password">
                {(field) => {
                  const error = getErrorMessage(field.state.meta.errors[0]);

                  return (
                    <Field className="gap-1.5 md:gap-2 lg:gap-2">
                      <div className="flex items-center">
                        <FieldLabel htmlFor={field.name}>Contraseña</FieldLabel>
                      </div>
                      <div className="relative">
                        <Input
                          id={field.name}
                          name={field.name}
                          type={passwordVisible ? 'text' : 'password'}
                          value={field.state.value}
                          autoComplete="current-password"
                          aria-invalid={error ? true : undefined}
                          aria-describedby={
                            error ? 'password-error' : undefined
                          }
                          className={cn(
                            'border pr-11',
                            'border-primary-foreground/35',
                            'login-glass-input h-9 rounded-md bg-lua-dark-blue/40 text-primary-foreground shadow-xs transition-[color,box-shadow] placeholder:text-primary-foreground/50',
                            'aria-invalid:border-primary-foreground/35 aria-invalid:ring-ring/50',
                          )}
                          onBlur={field.handleBlur}
                          onChange={(event) =>
                            field.handleChange(event.target.value)
                          }
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-sm"
                          className="pointer-events-auto absolute top-1/2 right-1 size-8 -translate-y-1/2 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/15 hover:text-primary-foreground active:!-translate-y-1/2 dark:hover:bg-primary-foreground/10"
                          onClick={() => setPasswordVisible((value) => !value)}
                          aria-label={
                            passwordVisible
                              ? 'Ocultar contraseña'
                              : 'Mostrar contraseña'
                          }
                          aria-pressed={passwordVisible}
                        >
                          {passwordVisible ? (
                            <EyeOffIcon className="size-4" aria-hidden />
                          ) : (
                            <EyeIcon className="size-4" aria-hidden />
                          )}
                        </Button>
                      </div>
                      {error && (
                        <p id="password-error" className="text-xs text-red-400">
                          {error}
                        </p>
                      )}
                    </Field>
                  );
                }}
              </form.Field>

              <Field className="gap-1.5 md:gap-2 lg:gap-2">
                {serverError && (
                  <p className="text-center text-xs text-red-400" role="alert">
                    {serverError}
                  </p>
                )}
                <form.Subscribe selector={(state) => state.isSubmitting}>
                  {(isSubmitting) => (
                    <Button
                      type="submit"
                      variant="luaPale"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Ingresando...' : 'Ingresar'}
                    </Button>
                  )}
                </form.Subscribe>
                <FieldDescription className="text-center text-primary-foreground/90">
                  <button
                    type="button"
                    className="text-sm text-primary-foreground underline-offset-4 hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
