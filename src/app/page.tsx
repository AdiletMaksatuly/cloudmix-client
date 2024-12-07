import { redirect } from 'next/navigation';
import APP_ROUTES from '@/shared/consts/routes.const';


export default function HomePage() {
  redirect(APP_ROUTES.Login);
}
