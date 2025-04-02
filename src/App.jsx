import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
const Home = lazy(() => import('./pages/Home'));

function App() {

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    </div>
  )
}

export default App