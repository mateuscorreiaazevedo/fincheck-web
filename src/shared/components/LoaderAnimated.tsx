import loadingAnimated from '@/assets/animations/loading-animated.json' with {
  type: 'json',
};
import { Animation } from './Animation';

export function LoaderAnimated() {
  return (
    <Animation autoplay className="h-52" looping source={loadingAnimated} />
  );
}
