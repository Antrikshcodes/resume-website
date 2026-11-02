import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<{ name: string; className?: string; size?: number }> = ({
  name,
  className = "w-5 h-5",
  size = 20
}) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normalized) {
    case 'python':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
          <path d="M11.927 0C6.07 0 6.376 2.535 6.376 2.535l.006 2.628h5.63v.79H4.14S0 5.46 0 11.366c0 5.908 3.593 5.698 3.593 5.698h2.14v-2.996s-.117-3.57 3.504-3.57h5.45v-.84H9.23s-2.94.05-2.94-2.884c0-2.934 2.597-2.88 2.597-2.88h7.91S20.73 4.02 20.73 9.77c0 5.75-2.923 5.59-2.923 5.59h-1.89v2.996s.168 3.57-3.504 3.57H6.96v.84h5.455s2.94-.05 2.94 2.884c0 2.934-2.597 2.88-2.597 2.88H4.85S.81 28.53.81 22.78c0-5.75 3.036-5.75 3.036-5.75h1.89v-2.996S5.57 10.464 9.24 10.464h5.455v.84h-5.455s-2.94.05-2.94 2.884c0 2.934 2.597 2.88 2.597 2.88h7.91s3.935.13 3.935 5.88c0 5.75-3.594 5.698-3.594 5.698h-2.14v-2.996s.117-3.57-3.504-3.57H6.96v-.84h5.455s2.94-.05 2.94 2.884c0 2.934-2.597 2.88-2.597 2.88H4.85S.81 28.53.81 22.78" />
        </svg>
      );
    case 'cplusplus':
    case 'cpp':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="12" r="6" />
          <path d="M16 9v6M13 12h6M21 10v4M19 12h4" />
        </svg>
      );
    case 'c':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 9a6 6 0 1 0 0 6" />
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#E8D44D" />
          <path d="M9 16.5c0 1.5-.8 2-2 2-1 0-1.8-.5-2.1-1.2l1.2-.7c.2.4.5.6.9.6.5 0 .7-.3.7-.8v-5.4h1.3v5.5zm8 0c0 1.6-1 2-2.3 2-1.3 0-2.2-.6-2.5-1.5l1.2-.6c.2.6.6.9 1.3.9.6 0 1-.3 1-.7 0-.5-.4-.7-1.3-1.1-1.2-.5-1.9-1.1-1.9-2.1 0-1.4 1-2.1 2.2-2.1 1.1 0 1.8.4 2.2 1.2l-1.1.7c-.2-.4-.5-.6-1.1-.6-.5 0-.8.3-.8.6 0 .4.3.6 1.1 1 1.4.6 2 1.2 2 2.3z" fill="#171717" />
        </svg>
      );
    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
          <path d="M10 9H6V7h10v2h-4v9h-2V9zm5.5 5.5c.3.5.8.8 1.5.8.6 0 1-.3 1-.7 0-.4-.4-.7-1.1-1-1.2-.5-1.8-1.1-1.8-2 0-1.3 1-2.1 2.3-2.1 1.1 0 1.8.4 2.2 1.2l-1.2.7c-.2-.4-.5-.6-1-.6-.5 0-.8.3-.8.6 0 .4.3.6 1 1 1.3.6 1.9 1.1 1.9 2.1 0 1.4-1 2.2-2.4 2.2-1.3 0-2.2-.6-2.6-1.5l1-.7z" fill="#FFFFFF" />
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 2c-1.5 2-1 4 1 5-2 1-3 3-2 5M14 2c-1.5 2-1 4 1 5-2 1-3 3-2 5M5 18a9 4 0 0 0 14 0M7 21h10" />
        </svg>
      );
    case 'bash':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m4 6 6 6-6 6M12 18h8" />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="#171717" />
          <path d="M16.5 8h1.8v8h-1.8V8zm-6.2 0h1.8l-4.5 7.9h-1.8L10.3 8z" fill="#FFFFFF" />
        </svg>
      );
    case 'html5':
    case 'html':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z" />
          <path d="M8 8h8M8 12h7M9 16l3 1 3-1" />
        </svg>
      );
    case 'css3':
    case 'css':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z" />
          <path d="M16 8H8l.5 4h7.5l-.5 4-3.5 1-3.5-1-.2-2" />
        </svg>
      );
    case 'angularjs':
    case 'angular':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2 3 5l1.5 13L12 22l7.5-4L21 5l-9-3z" />
          <path d="M12 6.5 7.5 16h2.2l1-2.5h2.6l1 2.5h2.2L12 6.5zm-.7 5.5 1-2.5 1 2.5h-2z" />
        </svg>
      );
    case 'canvasjs':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 4 4 5-7" />
        </svg>
      );
    case 'nodejs':
    case 'node':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2 3 7v10l9 5 9-5V7l-9-5z" />
          <path d="M12 12v10M12 12 3 7M12 12l9-5" />
        </svg>
      );
    case 'django':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 8v8M12 11v5c0 1.5-1 2-2 2M16 8v8" />
        </svg>
      );
    case 'flask':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3h6M10 3v5l-4 8.5A3 3 0 0 0 8.6 21h6.8a3 3 0 0 0 2.6-4.5L14 8V3" />
        </svg>
      );
    case 'firebase':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 17l4-14 3.5 6.5M4 17l8 5 8-5M4 17l16-8-4-6.5L11.5 9.5" />
        </svg>
      );
    case 'microsoftazure':
    case 'azure':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m3 19 6-14h5l-6 14H3zM10 19l4.5-6H21l-7 10h-4z" />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 13h19c0 4-3.5 7-9.5 7S2 17 2 13z" />
          <rect x="5" y="9" width="3" height="3" />
          <rect x="9" y="9" width="3" height="3" />
          <rect x="13" y="9" width="3" height="3" />
          <rect x="9" y="5" width="3" height="3" />
        </svg>
      );
    case 'pytorch':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 3l-1.5 2a8 8 0 1 0 5 6.5" />
          <circle cx="15.5" cy="4.5" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'pandas':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="8" cy="7" r="3" />
          <circle cx="16" cy="7" r="3" />
          <rect x="6" y="12" width="12" height="9" rx="4" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C8 7 6 12 7 16c1 4 5 6 5 6s4-2 5-6c1-4-1-9-5-14z" />
          <path d="M12 2v20" />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 15c4-6 10-6 15 0M8 12c2-3 6-3 8 0M18 10c1-2 2-3 4-2" />
        </svg>
      );
    case 'sqlite':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );
    case 'mssqlserver':
    case 'mssql':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </svg>
      );
    case 'oracle':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
          <ellipse cx="12" cy="12" rx="9" ry="5.5" />
        </svg>
      );
    case 'reactnative':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <circle cx="12" cy="18" r="1" />
          <ellipse cx="12" cy="9" rx="4" ry="2" />
        </svg>
      );
    case 'flutter':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m14 3-8 8 8 8M14 13l4-4M10 17l4 4" />
        </svg>
      );
    case 'android':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 10h10v8H7zM9 5l-2-2M15 5l2-2" />
          <circle cx="9" cy="13" r="1" fill="currentColor" />
          <circle cx="15" cy="13" r="1" fill="currentColor" />
        </svg>
      );
    case 'arduino':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="8" cy="12" r="5" />
          <circle cx="16" cy="12" r="5" />
          <path d="M7 12h2M15 11v2M14 12h2" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="M8.5 12h3a4 4 0 0 0 4-4V8.5M11.5 12a4 4 0 0 1 4 4v.5" />
        </svg>
      );
    case 'linux':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="7" r="4" />
          <path d="M8 12c-2 2-3 5-2 8h12c1-3 0-6-2-8M10 17h4" />
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="15" cy="12" r="3" />
          <circle cx="9" cy="18" r="3" />
          <path d="M9 3h3a3 3 0 0 1 0 6H9V3zM9 9h3a3 3 0 0 1 0 6H9V9z" />
          <path d="M12 3h3a3 3 0 0 1 0 6h-3V3z" />
        </svg>
      );
    case 'framer':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 2h14v7h-7v7l7-7M5 9h14M5 16l7 6v-6H5z" />
        </svg>
      );
    case 'blender':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="14" r="5" />
          <circle cx="12" cy="14" r="2" />
          <path d="M12 9V3M7.5 10.5 3 7M16.5 10.5 21 7" />
        </svg>
      );
    case 'photoshop':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 9h3a2 2 0 1 1 0 4H8v4M15 13c-.5-.5-1-.8-1.7-.8-1 0-1.3.6-1.3 1.2 0 1.2 2.5 1 2.5 2.6 0 .9-.8 1.5-1.8 1.5-1 0-1.7-.5-2-1" />
        </svg>
      );
    case 'unity':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v7M5 8l6 3.5M19 8l-6 3.5M7 19l5-5 5 5" />
        </svg>
      );
    case 'unrealengine':
    case 'unreal':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 8v8l3-3 3 3V8M12 8v5" />
        </svg>
      );
    default:
      return (
        <span className="w-5 h-5 flex items-center justify-center text-[10px] font-mono font-bold bg-[#EFEEE8] text-[#171717] rounded">
          {name.slice(0, 2).toUpperCase()}
        </span>
      );
  }
};
