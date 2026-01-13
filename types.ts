
// Add React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  email: string;
  telegram: string;
  homepage: string;
}
