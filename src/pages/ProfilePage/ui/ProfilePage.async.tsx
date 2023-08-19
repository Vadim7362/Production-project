import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  //Так в реальных проектах не делать!!!! Делаем только для КУРСА!!!!
  setTimeout(() => resolve(import('./ProfilePage')), 1500)
}));