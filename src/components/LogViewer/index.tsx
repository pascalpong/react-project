import React from 'react';
import { 
  Table, 
  Sheet, 
  Typography,
  Button
} from '@mui/joy';
import { getLogsForDisplay, getDetailedLogs, clearLogs, clearAllLogs } from '../../utilities/generalFunctions';

const LogViewer = () => {
  const [logs, setLogs] = React.useState(getLogsForDisplay());
  const [selectedSerial, setSelectedSerial] = React.useState<string | null>(null);

  const handleRefresh = () => {
    setLogs(getLogsForDisplay());
  };

  const handleClearLogs = (serial: string) => {
    clearLogs(serial);
    handleRefresh();
  };

  const handleClearAll = () => {
    clearAllLogs();
    handleRefresh();
  };

  return (
    <Sheet
      variant="outlined"
      sx={{ p: 2, borderRadius: 'sm' }}
    >
      <Typography level="h4" sx={{ mb: 2 }}>Access Logs</Typography>
      
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Last Access</th>
            <th>Total Accesses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.serial}>
              <td>{log.title}</td>
              <td>{log.lastAccess}</td>
              <td>{log.totalAccesses}</td>
              <td>
                <Button
                  size="sm"
                  variant="outlined"
                  color="primary"
                  onClick={() => setSelectedSerial(log.serial)}
                  sx={{ mr: 1 }}
                >
                  Details
                </Button>
                <Button
                  size="sm"
                  variant="outlined"
                  color="danger"
                  onClick={() => handleClearLogs(log.serial)}
                >
                  Clear
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedSerial && (
        <Sheet sx={{ mt: 2, p: 2 }}>
          <Typography level="title-lg">Detailed Access Log</Typography>
          <Typography level="body-sm">
            {getDetailedLogs(selectedSerial).map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </Typography>
        </Sheet>
      )}

      <Button
        color="danger"
        variant="outlined"
        onClick={handleClearAll}
        sx={{ mt: 2 }}
      >
        Clear All Logs
      </Button>
    </Sheet>
  );
};

export default LogViewer; 