import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  icon,
  onClick,
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary: "bg-pink text-white shadow-lg shadow-pink/20 hover:-translate-y-0.5 hover:bg-pink-strong",
    secondary: "bg-white text-navy border border-navy/10 hover:-translate-y-0.5 dark:bg-slate-900 dark:text-cream",
    ghost: "bg-transparent text-navy hover:bg-pink-soft dark:text-cream dark:hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm sm:text-base",
    lg: "px-6 py-3.5 text-base sm:text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {icon ?? <ArrowRight className="h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
