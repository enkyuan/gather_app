import { useRouter } from 'expo-router'
import { routes } from '@/routes'

export function useNavigate(route: keyof Router, params?: Record<string, string>) {
  const router = useRouter();
  
  const routePath = routes[route];
  router.push(routePath);
};
