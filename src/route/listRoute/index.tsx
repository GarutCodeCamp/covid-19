import React from 'react';
import { typeRoute } from './interface';

const Routes: typeRoute[] = [
    {
        path: '/home',
        exact: true,
        component: React.lazy(() => import('../../pages/home'))
    }
];

export default Routes;
