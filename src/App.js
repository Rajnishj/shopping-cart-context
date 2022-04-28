import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ErrorFallback from "./ErrorBoundary";
// import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";

const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <Router>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
