import React, { useState, useEffect } from 'react';

export const NetworkStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 px-3 py-1.5 rounded-full bg-[#111111] border border-red-500/50 text-red-400 font-mono text-xs flex items-center space-x-2">
      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
      <span>OFFLINE MODE // CACHED RESUME READY</span>
    </div>
  );
};
