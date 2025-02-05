import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Friends from "./pages/Friends";
import Messages from "./pages/Messages";
import Events from "./pages/Events";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // This will be replaced with actual auth check
  const isAuthenticated = true;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <MainLayout>
                    <Home />
                  </MainLayout>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/gallery"
              element={
                isAuthenticated ? (
                  <MainLayout>
                    <Gallery />
                  </MainLayout>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/friends"
              element={
                isAuthenticated ? (
                  <MainLayout>
                    <Friends />
                  </MainLayout>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/messages"
              element={
                isAuthenticated ? (
                  <MainLayout>
                    <Messages />
                  </MainLayout>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/events"
              element={
                isAuthenticated ? (
                  <MainLayout>
                    <Events />
                  </MainLayout>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/settings"
              element={
                isAuthenticated ? (
                  <MainLayout>
                    <Settings />
                  </MainLayout>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;