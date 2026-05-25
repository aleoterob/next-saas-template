import { z } from "zod"

export const loginSchema = z.object({
  email: z.email("Ingresa un email valido"),
  password: z
    .string()
    .min(7, "La contraseña debe tener al menos 7 caracteres")
    .regex(/[A-Z]/, "La contraseña debe tener al menos una mayuscula")
    .regex(/\d/, "La contraseña debe tener al menos un numero")
    .regex(
      /[^A-Za-z0-9]/,
      "La contraseña debe tener al menos un caracter especial"
    ),
})

export type LoginFormValues = z.infer<typeof loginSchema>
