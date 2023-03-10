import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import authOperations from './redux/auth/authOperations';
import PrivateRoute from './components/PrivateRouter';
import RestrictedRoute from './components/RestrictedRoute ';
import SharedLayout from './components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('./pages/Home/Home'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const NoticesCategoriesList = lazy(() =>
  import('./components/NoticesCategoriesList/NoticesCategoriesList')
);
const OurFriendsPage = lazy(() => import('./pages/OurFriendsPage/OurFriendsPage'));

function App() {
  const { refreshUserData } = authOperations;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserData());
  }, [dispatch, refreshUserData]);

  return (
    <div>
      <Routes>
        <Route path="" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/user" component={<LoginPage />} />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/user" component={<RegisterPage />} />}
          />
          <Route
            path="/user"
            element={<PrivateRoute redirectTo="/login" component={<UserPage />} />}
          />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />}>
            <Route path="sell" element={<NoticesCategoriesList />} />
            <Route path="lost-found" element={<NoticesCategoriesList />} />
            <Route path="for-free" element={<NoticesCategoriesList />} />
            <Route path="own" element={<NoticesCategoriesList />} />
            <Route path="favorite" element={<NoticesCategoriesList />} />
            <Route path="*/:noticeId" element={<NoticesCategoriesList />} />
          </Route>
          <Route path="/friends" element={<OurFriendsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
