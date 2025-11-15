import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import AuthGuard from "@/components/AuthGuard";
import Layout from "@/components/layout/Layout";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected Routes */}
              <Route
                path="/"
                element={
                  <AuthGuard>
                    <Layout>
                      <Dashboard />
                    </Layout>
                  </AuthGuard>
                }
              />
              <Route
                path="/livros"
                element={
                  <AuthGuard>
                    <Layout>
                      <Books />
                    </Layout>
                  </AuthGuard>
                }
              />
              <Route
                path="/livros/:id"
                element={
                  <AuthGuard>
                    <Layout>
                      <BookDetails />
                    </Layout>
                  </AuthGuard>
                }
              />
              <Route
                path="/filmes"
                element={
                  <AuthGuard>
                    <Layout>
                      <Movies />
                    </Layout>
                  </AuthGuard>
                }
              />
              <Route
                path="/filmes/:id"
                element={
                  <AuthGuard>
                    <Layout>
                      <MovieDetails />
                    </Layout>
                  </AuthGuard>
                }
              />
              <Route
                path="/usuarios"
                element={
                  <AuthGuard>
                    <Layout>
                      <Users />
                    </Layout>
                  </AuthGuard>
                }
              />
              <Route
                path="/perfil"
                element={
                  <AuthGuard>
                    <Layout>
                      <Profile />
                    </Layout>
                  </AuthGuard>
                }
              />

              {/* Catch-all 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
