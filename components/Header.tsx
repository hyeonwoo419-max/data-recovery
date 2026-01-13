
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800">TDS 데이터복구</h1>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <a href={CONTACT_INFO.homepage} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            공식 홈페이지
          </a>
        </nav>

        <a 
          href={CONTACT_INFO.homepage} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-slate-800 transition-all sm:hidden"
        >
          홈페이지
        </a>
      </div>
    </header>
  );
};

export default Header;
