import fs from 'fs';
import path from 'path';
import serials from '../details/serials.json';

interface SerialData {
  serial: string;
  title: string;
  description: string;
  timeLog: string[];
}

// Add type assertion for the imported JSON
interface SerialsData {
  serials: SerialData[];
}
const serialsData = serials as SerialsData;

const updateTimeLogInFile = (serial: string): void => {
  try {
    const currentTime = new Date().toLocaleString();
    const storedLogs = localStorage.getItem('timeLog');
    const logs = storedLogs ? JSON.parse(storedLogs) : {};
    
    if (!logs[serial] || (new Date().getTime() - new Date(logs[serial]).getTime()) >= 30 * 60 * 1000) {
      logs[serial] = currentTime;
      localStorage.setItem('timeLog', JSON.stringify(logs));
      console.log(`Time log updated for serial ${serial}`);
    }
  } catch (error) {
    console.error('Error updating time log:', error);
  }
};

export { updateTimeLogInFile }; 