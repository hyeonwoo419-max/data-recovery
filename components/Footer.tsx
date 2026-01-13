
import React from 'react';
import { Mail, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <h2 className="text-xl font-bold text-white">TDS 데이터복구</h2>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-sm">
              핸드폰, 하드디스크, 카톡 포렌식 전문 기업으로서 최신 장비와 기술력을 바탕으로 당신의 소중한 데이터를 복원해 드립니다.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">고객지원 문의</h3>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">이메일 문의</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-200 hover:text-blue-400 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-sky-500 transition-colors">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">텔레그램 문의</p>
                <a href={`https://t.me/${CONTACT_INFO.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-sky-400 transition-colors">
                  {CONTACT_INFO.telegram}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TDS 데이터복구. All rights reserved.</p>
          <p className="mt-2 text-slate-600">본 페이지는 고객 전용 개별 다운로드 서비스를 위해 운영됩니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
