import { useEffect } from 'react';
import {
  getMachines,
  get20Machines,
  getVillagers2,
  getVillagers,
  getFish,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    getVillagers2();
    getVillagers();
    getMachines();
    get20Machines();
    getFish();
  });
  return <h1>Hello World</h1>;
}
