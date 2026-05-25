import { cn } from "@/shared/utils/cn"

type LoginBrandSeparatorProps = React.ComponentProps<"div">

export function LoginBrandSeparator({
  className,
  ...props
}: LoginBrandSeparatorProps) {
  return (
    <div
      className={cn("flex h-7 w-full shrink-0 items-center md:h-10", className)}
      {...props}
    >
      <div className="h-px min-w-0 flex-1 bg-primary-foreground/35" />
      <div className="flex w-14 shrink-0 items-center justify-center">
        <div className="flex size-8 items-center justify-center rounded-full border border-primary-foreground/35 bg-primary-foreground/10 text-xs font-semibold tracking-wide text-primary-foreground">
          LB
        </div>
      </div>
      <div className="h-px min-w-0 flex-1 bg-primary-foreground/35" />
    </div>
  )
}
