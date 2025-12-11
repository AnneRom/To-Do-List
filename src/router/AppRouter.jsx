import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <Routes> 
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="*" element={<NotFound />} />
        </Route>

    </Routes>
  );
};

export default AppRouter;