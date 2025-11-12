'use client';

import { Camera, BookOpen, Search, Trophy, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getEstatisticasAlbum } from '@/lib/especies-data';

export default function Home() {
  const [stats, setStats] = useState({ total: 0, desbloqueadas: 0, percentual: 0 });

  useEffect(() => {
    const estatisticas = getEstatisticasAlbum();
    setStats(estatisticas);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AnimalDex</h1>
                <p className="text-xs text-gray-600">Descubra a Biodiversidade</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 px-3 py-1.5 rounded-full border border-amber-300">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-bold text-amber-900">{stats.desbloqueadas}/{stats.total}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Catálogo Completo da Biodiversidade
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore o Reino Animal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Identifique espécies com sua câmera, colecione figurinhas digitais e aprenda sobre todos os animais do planeta!
          </p>
        </div>

        {/* Progresso do Álbum */}
        <div className="max-w-md mx-auto mb-8 bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Progresso do Álbum</span>
            <span className="text-2xl font-bold text-emerald-600">{stats.percentual}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
              style={{ width: `${stats.percentual}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            {stats.desbloqueadas} de {stats.total} espécies desbloqueadas
          </p>
        </div>

        {/* Menu Principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* Identificar por Câmera */}
          <Link href="/identificar">
            <div className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Identificar Animal</h3>
              <p className="text-blue-100 text-sm mb-4">
                Use sua câmera para identificar espécies em tempo real e desbloquear figurinhas
              </p>
              <div className="flex items-center gap-2 text-white font-medium">
                <span>Abrir Câmera</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Álbum de Figurinhas */}
          <Link href="/album">
            <div className="group bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="px-2 py-1 bg-white/20 rounded-full text-xs text-white font-bold">
                  {stats.desbloqueadas}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Meu Álbum</h3>
              <p className="text-purple-100 text-sm mb-4">
                Veja sua coleção de figurinhas e explore todas as espécies catalogadas
              </p>
              <div className="flex items-center gap-2 text-white font-medium">
                <span>Ver Coleção</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Explorar Categorias */}
          <Link href="/album?categoria=terrestre">
            <div className="group bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Explorar por Categoria</h3>
              <p className="text-emerald-100 text-sm mb-4">
                Navegue por Terrestres, Aquáticos, Aéreos e Extintos
              </p>
              <div className="flex items-center gap-2 text-white font-medium">
                <span>Explorar</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Animais Domésticos */}
          <Link href="/identificar?tipo=domestico">
            <div className="group bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🐾</span>
                </div>
                <div className="px-2 py-1 bg-white/20 rounded-full text-xs text-white font-bold">
                  Especial
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Meu Pet</h3>
              <p className="text-pink-100 text-sm mb-4">
                Capture foto-figurinhas dos seus cães e gatos domésticos
              </p>
              <div className="flex items-center gap-2 text-white font-medium">
                <span>Fotografar Pet</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Dados Científicos</h4>
            <p className="text-sm text-gray-600">
              Taxonomia completa, métricas e informações biológicas detalhadas
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎬</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Multimídia</h4>
            <p className="text-sm text-gray-600">
              Vídeos de comportamento, áudios dos sons e imagens de alta qualidade
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Colecionável</h4>
            <p className="text-sm text-gray-600">
              Sistema de figurinhas para incentivar descoberta e aprendizado
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-gray-200 mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            🌍 Catálogo completo da biodiversidade terrestre • Educação e conservação
          </p>
        </div>
      </footer>
    </div>
  );
}
