import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("soft-card rounded-3xl p-5 sm:p-6", className)}>{children}</div>;
}
