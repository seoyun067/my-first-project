import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200 flex items-center justify-center p-6 relative overflow-hidden">
      {/* 배경 장식 (밤하늘 느낌) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />

      <div className="max-w-md w-full z-10">
        {/* 상단 브랜드네임 */}
        <p className="text-center text-xs tracking-[0.3em] text-purple-400 mb-8 font-light italic">
          BAMTI ARCHIVE
        </p>

        {/* 메인 비주얼 카드 (영화 프레임 느낌) */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl relative group">
          <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-purple-500/50 rounded-tr-xl" />
          <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-purple-500/50 rounded-bl-xl" />

          {/* 프로필 정보 */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-light tracking-tight">
              <span className="text-white">김서윤</span>
            </h1>
            
            <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 text-xs text-purple-300">
              Movies & Stories
            </div>

            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto my-8" />

            <blockquote className="space-y-4">
              <p className="text-lg leading-relaxed font-serif italic text-slate-300">
                "미워하는 마음은<br/>가릴 수 없는 게 있지"
              </p>
            </blockquote>
          </div>
        </div>

        {/* 하단 푸터 */}
        <footer className="mt-12 text-center">
          <p className="text-[10px] text-slate-500 tracking-widest uppercase">
            © 2026 Seoyoon. Directed by Night.
          </p>
        </footer>
      </div>
    </main>
  );
}
