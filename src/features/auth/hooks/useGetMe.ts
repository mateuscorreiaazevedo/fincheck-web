import { useQuery, useQueryClient } from '@tanstack/react-query';
import { authQueryKeys } from '../constants/authQueryKeys';
import { authService } from '../services/HttpClientAuthService';

type UseQueryMeProps = {
  enabled?: boolean;
};

export function useGetMe(props: UseQueryMeProps = {}) {
  const { enabled = false } = props;
  const queryClient = useQueryClient();

  const { data, isFetching, isError, isSuccess } = useQuery({
    queryKey: authQueryKeys.getMeKey(),
    queryFn: () => authService.getMe(),
    staleTime: Number.POSITIVE_INFINITY,
    enabled,
  });

  function removeQuery() {
    queryClient.removeQueries({ queryKey: authQueryKeys.getMeKey() });
  }

  return {
    authenticatedUser: data,
    isSuccess,
    isFetching,
    isError,
    removeQuery,
  };
}
