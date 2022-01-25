import { useEffect } from 'react';
import { getMachines, getVillagers2 } from './services/promise-me';
import { getVillagers } from './services/promise-me';

export default function App() {
  useEffect(() => {
    getVillagers2();
    getVillagers();
    getMachines();
  });
  return <h1>Hello World</h1>;
}
