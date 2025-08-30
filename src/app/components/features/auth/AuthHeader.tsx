import { Link } from 'react-router';

interface AuthFormHeaderProps {
  title: string;
  subtitle: string;
  linkLabel: string;
  linkHref: string;
}

export function AuthHeader({
  linkHref,
  linkLabel,
  subtitle,
  title,
}: AuthFormHeaderProps) {
  return (
    <header className="mb-[60px] flex flex-col items-center gap-4 text-center">
      <h1 className="font-bold text-2xl text-gray-9 tracking-[-1px]">
        {title}
      </h1>
      <span className="space-x-2 text-gray-7 tracking-[-0.5px]">
        {subtitle}{' '}
        <Link className="font-medium text-teal-9 hover:underline" to={linkHref}>
          {linkLabel}
        </Link>
      </span>
    </header>
  );
}
