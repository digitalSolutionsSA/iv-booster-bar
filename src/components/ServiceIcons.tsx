import type { ReactNode } from 'react';

type IconName = 'droplet' | 'syringe' | 'clipboard' | 'briefcase' | 'edit';

const icons: Record<IconName, ReactNode> = {
  droplet: <path d="M24 6C24 6 11 22.5 11 31C11 37.6 16.8 43 24 43C31.2 43 37 37.6 37 31C37 22.5 24 6 24 6Z" />,
  syringe: (
    <g>
      <path d="M32 4L44 16" />
      <path d="M28.5 7.5L40.5 19.5" />
      <path d="M27 9L14 22L26 34L39 21" />
      <path d="M14 22L6 30L18 42L26 34" />
      <path d="M6 30L4 32" strokeLinecap="round" />
      <path d="M12 32L16 36" strokeLinecap="round" />
      <path d="M16 28L20 32" strokeLinecap="round" />
    </g>
  ),
  clipboard: (
    <g>
      <rect x="9" y="8" width="30" height="35" rx="4" />
      <rect x="17" y="5" width="14" height="7" rx="2" />
      <path d="M16 25L21.5 30.5L33 18" />
    </g>
  ),
  briefcase: (
    <g>
      <rect x="6" y="15" width="36" height="24" rx="4" />
      <path d="M16 15V11C16 8.79086 17.7909 7 20 7H28C30.2091 7 32 8.79086 32 11V15" />
      <path d="M6 26H42" />
      <path d="M21 23V29" strokeLinecap="round" />
      <path d="M27 23V29" strokeLinecap="round" />
    </g>
  ),
  edit: (
    <g>
      <path d="M30 8L40 18L18 40L7 41L8 30L30 8Z" />
      <path d="M25 13L35 23" />
    </g>
  ),
};

export default function ServiceIcon({ name }: { name: string }) {
  const icon = icons[name as IconName] ?? icons.droplet;
  return (
    <svg
      viewBox="0 0 48 48"
      width="48"
      height="48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icon}
    </svg>
  );
}
