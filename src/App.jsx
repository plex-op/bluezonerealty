import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { RootLayout } from "./layouts";
import { Home } from "./pages";
import { Loader } from "./components";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <div className="relative">
      <Toaster />
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
      <a
        href={`https://wa.me/91${import.meta.env.VITE_BLUEZONE_MOBILE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-2 md:p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 group"
      >
        <img
          src="https://img.icons8.com/?size=40&id=16713&format=png&color=000000"
          alt="WhatsApp"
          className="group-hover:animate-bounce"
        />
      </a>
    </div>
  );
};

export default App;
