//done
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/header";
import { AuthProvider, useAuth } from "./context/authContext";
import RequireAuth from "./components/requireAuth";
import Login from "./pages/login";
import Register from "./pages/register";
import LandingPage from "./pages/landingPage";
import UserManagement from "./pages/userManagement";

const PostPreview = lazy(() => import('./pages/postPreview'));
const PostList = lazy(() => import('./pages/postList'));
const Comments = lazy(() => import('./pages/commentSection'));

function App() {
  const { user, login, logout } = useAuth();

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:postId" element={<PostPreview />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* User */}
            <Route element={<RequireAuth role="user" />}>
              <Route path="/comments" element={<Comments />} />
            </Route>

            {/* Admin */}
            <Route element={<RequireAuth role="admin" />}>
              <Route path="/admin/users" element={<UserManagement />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;