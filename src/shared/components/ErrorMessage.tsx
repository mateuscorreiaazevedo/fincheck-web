import { FieldError } from './ui';

interface ErrorMessageProps {
  error: Error | null;
  className?: string;
}

export function ErrorMessage({ error, className }: ErrorMessageProps) {
  if (!error) {
    return null;
  }

  return <FieldError className={className} error={error.message} />;
}
