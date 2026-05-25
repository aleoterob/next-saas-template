import { LoginForm } from "@/features/auth/components/login-form"
import { Globe } from "@/shared/components/ui/globe"

const LOGIN_GLOBE_CONFIG = {
  markers: [],
}

export default function LoginPage() {
  return (
    <main className="relative isolate flex h-dvh max-h-dvh w-full shrink-0 flex-col overflow-x-hidden overflow-y-hidden px-3 py-4 md:h-svh md:max-h-svh md:p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <Globe
          className="top-1/2 left-1/2 w-[42rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-20 md:w-[48rem] md:opacity-30"
          config={LOGIN_GLOBE_CONFIG}
        />
      </div>
      <div className="relative z-2 flex min-h-0 w-full flex-1 flex-col overflow-x-hidden max-md:overflow-y-auto max-md:[-webkit-overflow-scrolling:touch] md:items-center md:justify-center md:overflow-visible">
        <div className="mx-auto w-full shrink-0 px-2 py-8 max-md:my-auto max-md:min-h-min sm:max-w-sm md:my-0 md:py-0">
          <LoginForm className="w-full max-w-sm sm:w-[min(92vw,34rem)] md:max-w-sm" />
        </div>
      </div>
    </main>
  )
}
