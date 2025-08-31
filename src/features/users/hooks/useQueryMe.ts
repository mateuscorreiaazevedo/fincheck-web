import { useQuery } from '@tanstack/react-query';
import { usersService } from '../services/httpClientUsersService';

type UseQueryMeProps = {
  enabled?: boolean;
};

const MILLISECONDS = 1000;
const SLATE_TIME_1_HOUR = 60 * 60 * MILLISECONDS;

export function useQueryMe(props: UseQueryMeProps = {}) {
  const { enabled = false } = props;

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => usersService.getMe(),
    staleTime: SLATE_TIME_1_HOUR, // 1 hour
    enabled,
  });

  return {
    user: data,
    isLoading,
    isFetching,
    isError,
  };
}
