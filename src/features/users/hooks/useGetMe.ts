import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usersService } from '../services/httpClientUsersService';

type UseQueryMeProps = {
  enabled?: boolean;
};

export function useGetMe(props: UseQueryMeProps = {}) {
  const { enabled = false } = props;
  const queryClient = useQueryClient();

  const { data, isFetching, isError, isSuccess } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => usersService.getMe(),
    staleTime: Number.POSITIVE_INFINITY,
    enabled,
  });

  function removeQuery() {
    queryClient.removeQueries({ queryKey: ['users', 'me'] });
  }

  return {
    user: data,
    isSuccess,
    isFetching,
    isError,
    removeQuery,
  };
}
