import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fef2f2] p-6 md:p-12 flex flex-col items-center gap-8 font-sans text-[#4a3f3f]">
      {/* 메인 프로필 카드 */}
      <section className="bg-white rounded-2xl shadow-sm border border-[#fee2e2] w-full max-w-2xl p-10 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#fbcfe8]"></div>
        
        {/* 상단 프로필 원형 아이콘 */}
        <div className="w-24 h-24 bg-[#fff1f2] rounded-full mb-6 border-2 border-[#fce7e7] flex items-center justify-center shadow-inner">
          <span className="text-4xl text-[#fb7185]">✨</span>
        </div>
        
        <p className="text-[11px] tracking-[0.3em] text-[#f472b6] mb-3 uppercase font-bold">
          Welcome to my archive
        </p>
        <h1 className="text-4xl font-extrabold mb-1 tracking-tight text-[#332d2d]">김서윤</h1>
        <p className="text-sm text-[#a8a2a2] tracking-widest mb-8">KIM SEO YOON</p>

        {/* 좋아하는 것 태그 */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['🎬 영화', '🍜 마라탕', '📚 일본문학', '🎨 마케팅'].map((fav) => (
            <span key={fav} className="px-5 py-2 bg-[#fff1f2] text-[#e11d48] rounded-full text-xs font-medium border border-[#ffe4e6]">
              {fav}
            </span>
          ))}
        </div>

        {/* 시그니처 문구 박스 */}
        <div className="w-full py-5 bg-[#fffafb] border-y border-[#fce7e7] text-center">
          <p className="text-[#db2777] font-serif italic text-lg">
            "미워하는 마음은 가릴 수 없는 게 있지"
          </p>
        </div>
      </section>

      {/* 하단 상세 정보 카드 (2단 레이아웃) */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
        {/* 전공 카드 */}
        <section className="flex-1 bg-white rounded-2xl shadow-sm border border-[#fee2e2] p-8 transition-transform hover:scale-[1.02]">
          <div className="flex items-center gap-2 mb-6">
            <span className="p-2 bg-[#fff1f2] rounded-lg">🎓</span>
            <h2 className="text-[10px] font-black text-[#f472b6] uppercase tracking-widest">Major</h2>
          </div>
          <h3 className="text-xl font-bold mb-3">전공</h3>
          <div className="bg-[#fff1f2] px-4 py-3 rounded-xl border border-[#ffe4e6] mb-4">
            <p className="text-sm font-bold text-[#be123c]">벤처중소기업학과</p>
          </div>
          <p className="text-[11px] leading-relaxed text-[#918181] font-medium">
            Soongsil University<br />
            Entrepreneurship & Small Business
          </p>
        </section>

        {/* 관심사 카드 */}
        <section className="flex-1 bg-white rounded-2xl shadow-sm border border-[#fee2e2] p-8 transition-transform hover:scale-[1.02]">
          <div className="flex items-center gap-2 mb-6">
            <span className="p-2 bg-[#fff1f2] rounded-lg">🔥</span>
            <h2 className="text-[10px] font-black text-[#f472b6] uppercase tracking-widest">Interests</h2>
          </div>
          <h3 className="text-xl font-bold mb-4">관심사</h3>
          <div className="flex flex-wrap gap-2">
            {['#윤리경영', '#사회적벤처', '#기업전략', '#심리학', '#넛지이론'].map((tag) => (
              <span key={tag} className="text-[11px] text-[#fb7185] bg-white px-2 py-1 rounded-md border border-[#fce7e7] font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-4 text-[10px] text-[#d1c2c2] tracking-[0.4em] font-light">
        © 2026 SEOYOON ARCHIVE.
      </footer>
    </main>
  );
}
