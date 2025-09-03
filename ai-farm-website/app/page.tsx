"use client";

import { Leaf, Bot, Zap, BrainCircuit, Building, Handshake, Users, Rss, ArrowRight, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// --- 数据定义 ---

// 首页三折叠模块内容
const homeModules = [
  {
    title: '为何是现在',
    content: '人工智能正在跨越，从工具性的个体智能走向组织化的协同智能。在这一关键时刻，我们率先将 AI Organizations 落地于农业：以真实农庄为基石，以虚拟社会为镜像，重构“感知—决策—服务”的完整循环。'
  },
  {
    title: '我们的差异',
    content: '我们并非打造“更聪明的助手”，而是建设一个能自组织、会协同的农庄。其独特之处在于真实农庄与虚拟孪生、人群与设备协同、资源与任务统筹、以及跨域融合增益。'
  },
  {
    title: '首批示范',
    content: '雄安智慧农业科技园作为首发样板，联合北京昌平神路葡萄园、通州农业基地进行多场景验证，逐步形成可复制的示范带。'
  }
];

// 功能模块内容
const functionModules = [
  { title: '气象大模型', description: '把气候不确定性变成可用的生产红利。', status: '即将上线' },
  { title: '土壤大模型', description: '从“看表层”到“懂根系”。', status: '即将上线' },
  { title: '种子/作物大模型', description: '把“品种选择”升级为“场景匹配”。', status: '即将上线' },
  { title: '农事调度智能体', description: '从任务执行走向组织协同。', status: '即将上线' },
  { title: '康养智能体', description: '让“从田到人”形成健康闭环。', status: '即将上线' },
  { title: 'AI美食推荐', description: '把“吃什么”交还给数据与味蕾。', status: '即将上线' },
  { title: '数字人代言 + AI艺术', description: '让每个农庄都有自己的“会说话的灵魂”。', status: '即将上线' },
];

// 示范基地内容
const demoBases = [
    { name: '雄安智慧农业科技园', description: 'AIGC驱动的闭环示范区，串联感知/调度/服务的全流程。', imageUrl: 'https://placehold.co/800x600/0C3B2E/ffffff?text=雄安基地' },
    { name: '神路葡萄园', description: '农旅与AI结合的应用试验场，含AI营养方案与艺术活动。', imageUrl: 'https://placehold.co/800x600/0C3B2E/ffffff?text=神路葡萄园' },
    { name: '通州农业基地', description: '软件系统对接与任务协同测试。', imageUrl: 'https://placehold.co/800x600/0C3B2E/ffffff?text=通州基地' },
];

// --- 主页面组件 ---
export default function AIFarmHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // 导航链接 (根据需求文档更新)
  const navLinks = [
    { href: '#vision', label: '愿景与理论', icon: <BrainCircuit className="h-5 w-5" /> },
    { href: '#modules', label: '功能模块', icon: <Zap className="h-5 w-5" /> },
    { href: '#bases', label: '示范基地', icon: <Building className="h-5 w-5" /> },
    { href: '#path', label: '产业化路径', icon: <ArrowRight className="h-5 w-5" /> },
    { href: '#cooperation', label: '开放合作', icon: <Handshake className="h-5 w-5" /> },
    { href: '#team', label: '团队', icon: <Users className="h-5 w-5" /> },
    { href: '#news', label: '动态', icon: <Rss className="h-5 w-5" /> },
  ];

  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.substring(1));
    sectionIds.push('home');
    const sectionElements = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const fromTop = window.scrollY + 90;
      let currentActive = 'home';
      for (const section of sectionElements) {
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          currentActive = section.id;
          break;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, isActive }) => (
    <a 
      href={href} 
      onClick={() => setIsMenuOpen(false)} 
      className={`relative py-2 text-gray-300 transition-colors duration-300 group ${isActive ? 'text-amber-400 font-semibold' : 'hover:text-amber-400'}`}
    >
      {label}
      <span 
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-amber-400 transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
      ></span>
    </a>
  );

  // --- 渲染 ---
  return (
    <>
      <style jsx={"true"} global={"true"}>{`
        html { scroll-behavior: smooth; }
        body { background-color: #051410; color: #E5E7EB; } /* 主背景色 */
      `}</style>
      <div className="font-sans bg-[#051410]">
        {/* Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0C3B2E]/80 backdrop-blur-lg shadow-2xl shadow-black/30' : 'bg-transparent'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center transition-all duration-300 py-4">
            <a href="#home" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold text-white">AI 农庄</span>
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => <NavLink key={link.href} {...link} isActive={link.href === `#${activeSection}`} />)}
            </nav>
            <div className="flex items-center">
              <button className="md:hidden z-50 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#0C3B2E] shadow-lg">
              <nav className="flex flex-col items-center space-y-4 p-6">
                {navLinks.map(link => <NavLink key={link.href} {...link} isActive={link.href === `#${activeSection}`} />)}
              </nav>
            </div>
          )}
        </header>

        <main>
          {/* Hero Section */}
          <section id="home" className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/首页图.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 p-6 flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                世界上第一个虚实相融的 AI 农庄
              </h1>
              <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                从“智能体Agent”走向“组织者Organization”，让农业进入可协同、可演化、可复制的智能时代。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#vision" className="bg-amber-500 text-[#0C3B2E] px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-400 transition-transform duration-300 hover:scale-105 inline-block">
                  了解愿景
                </a>
                <a href="#bases" className="bg-transparent border-2 border-gray-300 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#0C3B2E] transition-all duration-300 inline-block">
                  走进示范基地
                </a>
                <a href="#cooperation" className="bg-transparent border-2 border-gray-300 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#0C3B2E] transition-all duration-300 inline-block">
                  合作与接入
                </a>
              </div>
            </div>
          </section>
          
          {/* Home Modules Section */}
          <section className="py-20 bg-[#071f18]">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                {homeModules.map((item, index) => (
                  <div key={index} className="p-8 border border-green-800/50 rounded-lg bg-white/5 backdrop-blur-sm hover:border-amber-400/50 transition-colors duration-300">
                    <h3 className="text-2xl font-bold mb-4 text-amber-400">{item.title}</h3>
                    <p className="text-gray-300">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        {/* Vision Section */}
        <section id="vision" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">愿景与理论</h2>
                <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">AI 正在从“智能体”迈向“组织者”，我们率先以农业为起点，在“乡村—产业—服务”多维系统中验证组织智能的可行性与边界。</p>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="p-6 bg-[#0C3B2E] rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-amber-400">虚实相融的设计</h3>
                        <p>我们将真实农庄完整映射到虚拟世界，推动农业系统走向自发现、自对抗、自进化的新阶段。</p>
                    </div>
                    <div className="p-6 bg-[#0C3B2E] rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-amber-400">从“会聊”到“会治”</h3>
                        <p>我们推动AI从“会聊会做”跃升至“会治会协同”，形成数字田长与组织级治理能力。</p>
                    </div>
                    <div className="p-6 bg-[#0C3B2E] rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-amber-400">组织智能的门槛</h3>
                        <p>让AI参与到真实社会的治理与协同，以农业为起点，验证其可行性与边界。</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Function Modules Section */}
        <section id="modules" className="py-20 bg-[#071f18]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">功能模块</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {functionModules.map((mod, index) => (
                    <div key={index} className="p-6 rounded-lg border border-green-800/50 bg-white/5 backdrop-blur-sm text-center">
                    <h3 className="text-xl font-bold mb-2 text-amber-400">{mod.title}</h3>
                    <p className="text-gray-400 mb-4">{mod.description}</p>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200">
                        {mod.status}
                    </span>
                    </div>
                ))}
                </div>
            </div>
        </section>

        {/* Demonstration Bases Section */}
        <section id="bases" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">示范基地</h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    {demoBases.map((base, index) => (
                         <div key={index} className="bg-[#0C3B2E] rounded-lg shadow-lg overflow-hidden group">
                            <img src={base.imageUrl} alt={base.name} className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-white">{base.name}</h3>
                                <p className="text-gray-300">{base.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Placeholder Sections */}
        <section id="path" className="py-20 bg-[#071f18] text-center"><div className="container mx-auto px-6"><h2 className="text-3xl md:text-4xl font-bold text-white">产业化路径</h2><p className="text-gray-400 mt-4">内容即将上线...</p></div></section>
        <section id="cooperation" className="py-20 text-center"><div className="container mx-auto px-6"><h2 className="text-3xl md:text-4xl font-bold text-white">开放合作</h2><p className="text-gray-400 mt-4">内容即将上线...</p></div></section>
        <section id="team" className="py-20 bg-[#071f18] text-center"><div className="container mx-auto px-6"><h2 className="text-3xl md:text-4xl font-bold text-white">团队</h2><p className="text-gray-400 mt-4">内容即将上线...</p></div></section>
        <section id="news" className="py-20 text-center"><div className="container mx-auto px-6"><h2 className="text-3xl md:text-4xl font-bold text-white">动态</h2><p className="text-gray-400 mt-4">内容即将上线...</p></div></section>

        </main>

        {/* Footer */}
        <footer id="contact" className="bg-[#0C3B2E] text-white">
            <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-8">
                 <h2 className="text-3xl font-bold mb-4">一起把“AI Organizations”落在土地上。</h2>
                 <a href="#cooperation" className="bg-amber-500 text-[#0C3B2E] px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-400 transition-transform duration-300 hover:scale-105 inline-block">
                    申请接入
                </a>
            </div>
            <div className="mt-12 border-t border-green-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center text-center">
                <p>&copy; {new Date().getFullYear()} AI 农庄. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white">合作单位</a>
                    <a href="#" className="text-gray-400 hover:text-white">法务与隐私</a>
                    <a href="#" className="text-gray-400 hover:text-white">媒体联络</a>
                    <span className="text-gray-500">技术支持: 智灵动力</span>
                </div>
            </div>
            </div>
        </footer>
      </div>
    </>
  );
}

