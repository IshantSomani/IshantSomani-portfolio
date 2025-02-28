import { CircleLoader } from 'react-spinners';
import { lazy, Suspense, useMemo } from 'react';
const Home = lazy(() => import('./pages/Home'));

function App() {
  const loader = useMemo(() => (
    <div className="flex justify-center items-center h-screen">
      <CircleLoader color="#000" loading size={50} speedMultiplier={1} />
    </div>
  ), []);

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <Suspense fallback={loader}>
        <Home />
      </Suspense>
    </div>
  )
}

export default App