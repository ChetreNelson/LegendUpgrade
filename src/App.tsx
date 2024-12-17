import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-red-500">hello world</div>
      </Suspense>
    </>
  );
}

export default App;
