import { useQuery } from '@tanstack/react-query';
import { httpCategoriesService } from '../services/httpCategoriesService';

export function useGetCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => httpCategoriesService.list(),
  });
}
