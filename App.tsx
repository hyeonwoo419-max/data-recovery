
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import { SERVICES, DRIVE_LINK, CONTACT_INFO } from './constants';
import { ArrowRight, Download, Globe, ExternalLink, ClipboardCheck } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6 border border-blue-100 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              디지털 포렌식 & 데이터 복구 전문가
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              소중한 데이터를 <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">가장 완벽하게</span> 복구합니다.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              TDS 데이터복구는 핸드폰, 하드디스크, 카카오톡 포렌식 등 <br className="hidden md:block" />
              전문적인 기술력으로 잃어버린 정보를 찾아드립니다.
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-10 max-w-lg mx-auto">
              <p className="text-amber-800 text-sm font-medium">
                ⚠️ 이 페이지는 개인정보 전달을 위한 개별 다운페이지입니다.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 hover:-translate-y-1 transition-all"
              >
                <Download className="w-6 h-6" />
                복구파일 찾기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href={CONTACT_INFO.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
              >
                <Globe className="w-5 h-5" />
                홈페이지로 이동
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-slate-50 py-20 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">제공 서비스 안내</h2>
              <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form Section */}
        <section className="py-20 bg-white" id="inquiry">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <span className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                  <ClipboardCheck className="w-8 h-8" />
                </span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">무료 상담 신청</h2>
              <p className="text-slate-600">복구가 필요한 내용을 남겨주시면 전문가가 신속히 연락드립니다.</p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 md:p-10">
              <form action="https://formspree.io/f/mykkydzz" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">성함</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">연락처</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">복구 항목</label>
                  <select 
                    id="service" 
                    name="service" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">선택해주세요</option>
                    <option value="phone">핸드폰 복구</option>
                    <option value="harddisk">하드디스크 복구</option>
                    <option value="forensics">카톡 포렌식</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">상담 내용</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    placeholder="데이터 유실 경위나 복구가 필요한 파일 형식을 입력해주세요."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-3 py-2">
                  <input type="checkbox" id="privacy" required className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <label htmlFor="privacy" className="text-sm text-slate-500">개인정보 수집 및 이용에 동의합니다.</label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg"
                >
                  상담 신청하기
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              
              <h2 className="text-3xl font-bold mb-6">신뢰할 수 있는 TDS 기술력</h2>
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">1</div>
                  <p className="text-blue-100 leading-relaxed">디지털 포렌식 전문가가 직접 데이터를 정밀 분석합니다.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">2</div>
                  <p className="text-blue-100 leading-relaxed">최첨단 장비를 활용하여 물리적/논리적 손상을 모두 해결합니다.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">3</div>
                  <p className="text-blue-100 leading-relaxed">개인정보 보호법을 철저히 준수하며 데이터 유출을 방지합니다.</p>
                </div>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-sm font-medium border border-white/20">데이터 유실 방지</div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-sm font-medium border border-white/20">성공률 극대화</div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-sm font-medium border border-white/20">신속 복구 대응</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
