import serials from '../details/serials.json';

interface SerialData {
  serial: string;
  title: string;
  description: string;
  timeLog: string[];
}

interface LogDisplay {
  serial: string;
  title: string;
  lastAccess: string;
  totalAccesses: number;
}

const CheckSerial = async (serial: string): Promise<SerialData | undefined> => {
  const serialData = serials.serials.find((s: SerialData) => s.serial === serial);
  return serialData;
}

const CreateTimeLog = (serial: string): void => {
  const storedLogs = localStorage.getItem('serialLogs') 
    ? JSON.parse(localStorage.getItem('serialLogs') || '{}')
    : {};

  const timeLog = storedLogs[serial] || [];
  const currentTime = new Date();
  
  const lastLogTime = timeLog.length > 0 
    ? new Date(timeLog[timeLog.length - 1])
    : new Date(0);

  const timeDiff = (currentTime.getTime() - lastLogTime.getTime()) / (1000 * 60);

  if (timeDiff >= 30) {
    timeLog.push(currentTime.toLocaleString());
    storedLogs[serial] = timeLog;
    localStorage.setItem('serialLogs', JSON.stringify(storedLogs));
    console.log('Time log updated:', storedLogs);
  }
}

// Get logs for display
const getLogsForDisplay = (): LogDisplay[] => {
  const storedLogs = localStorage.getItem('serialLogs') 
    ? JSON.parse(localStorage.getItem('serialLogs') || '{}')
    : {};

  return serials.serials.map(serialData => ({
    serial: serialData.serial,
    title: serialData.title,
    lastAccess: storedLogs[serialData.serial]?.length > 0 
      ? storedLogs[serialData.serial][storedLogs[serialData.serial].length - 1]
      : 'Never accessed',
    totalAccesses: storedLogs[serialData.serial]?.length || 0
  }));
}

// Get detailed logs for a specific serial
const getDetailedLogs = (serial: string): string[] => {
  const storedLogs = localStorage.getItem('serialLogs') 
    ? JSON.parse(localStorage.getItem('serialLogs') || '{}')
    : {};
  return storedLogs[serial] || [];
}

// Clear logs for a specific serial
const clearLogs = (serial: string): void => {
  const storedLogs = JSON.parse(localStorage.getItem('serialLogs') || '{}');
  delete storedLogs[serial];
  localStorage.setItem('serialLogs', JSON.stringify(storedLogs));
}

// Clear all logs
const clearAllLogs = (): void => {
  localStorage.removeItem('serialLogs');
}

// Add this function to your utilities
const getProjectImageCount = (folder: string): number => {
  switch (folder) {
    case 'yvy':
      return 4;
    case 'photostudio':
      return 4;
    case 'bualuang':
      return 3;
    case 'goodtech':
      return 5;
    case 'centralpattana':
      return 7;
    default:
      return 3;
  }
};

export { 
  CheckSerial, 
  CreateTimeLog, 
  getLogsForDisplay, 
  getDetailedLogs, 
  clearLogs, 
  clearAllLogs,
  type LogDisplay,
  getProjectImageCount
};