import { Button } from "../ui/button";
import Link from "next/link";
import { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "default" | "secondary";
  size?: "default" | "sm" | "lg";
};

export function CTAButton({
  children,
  href,
  size = "lg",
  variant = "default",
}: CTAButtonProps) {
  <Button asChild variant={variant} size={size}>
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  </Button>;
}
