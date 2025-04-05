import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: typeof Link | "button";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ as: Component = "button", href, className, children, ...props }) => {
  if (Component === Link && href) {
    return (
      <Link href={href} passHref>
        <a className={`px-4 py-2 rounded ${className}`} {...props}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={`px-4 py-2 rounded ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;