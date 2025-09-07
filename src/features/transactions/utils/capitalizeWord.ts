import { StringBuilder } from '@/shared';

export function capitalizeWord(word: string) {
  return StringBuilder.parse(word).capitalize('').build();
}
