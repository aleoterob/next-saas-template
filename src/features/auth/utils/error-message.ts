export function getErrorMessage(error: unknown) {
  if (!error) return null
  if (typeof error === "string") return error
  if (typeof error === "object" && "message" in error) {
    const message = error.message

    return typeof message === "string" ? message : null
  }

  return null
}
