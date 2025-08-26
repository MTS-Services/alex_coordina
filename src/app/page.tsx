import Home from '@/interfaces/home/page';
import { Suspense } from 'react';

// =================code by shakil munshi==============
// const CartPage = dynamic(() => import('@/interfaces/cart/cart'), { ssr: t });

export default function Page() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Home />
    </Suspense>
  );
}
