import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Signup from './components/Signup';
import Dashboard from './routes/Dashboard';
import PrivateRoute from './components/PrivateRoute';

// Make sure you have created these page components
import DashboardIndex from './routes/pages/DashboardIndex';
import ManagementUsers from './routes/pages/ManagementUsers';
import ManagementProducts from './routes/pages/ManagementProducts';
import NotificationsAll from './routes/pages/NotificationsAll';
import NotificationsUnread from './routes/pages/NotificationsUnread';
import POSNew from './routes/pages/POSNew';
import POSHistory from './routes/pages/POSHistory';
import ContactsPage from './routes/pages/ContactsPage';
import SettingsPage from './routes/pages/SettingsPage';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/signup', element: <Signup /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardIndex /> },
      { path: 'management/users', element: <ManagementUsers /> },
      { path: 'management/products', element: <ManagementProducts /> },
      { path: 'notifications/all', element: <NotificationsAll /> },
      { path: 'notifications/unread', element: <NotificationsUnread /> },
      { path: 'pos/new', element: <POSNew /> },
      { path: 'pos/history', element: <POSHistory /> },
      { path: 'contacts', element: <ContactsPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);