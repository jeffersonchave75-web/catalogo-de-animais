'use client';

import { useState, useEffect, Suspense } from 'react';
import { ArrowLeft, Filter, Lock, CheckCircle2, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { especiesDatabase, CategoriaAnimal, EspecieAnimal, getEspeciesPorCategoria } from '@/lib/especies-data';

const categorias = [
  { id: 'todas' as const, nome: 'Todas', emoji: '🌍', cor: 'from-gray-500 to-gray-600' },
  { id: 'terrestre' as const, nome: 'Terrestres', emoji: '🦁', cor: 'from-amber-500 to-orange-600' },
  { id: 'aquatico' as const, nome: 'Aquáticos', emoji: '🐋', cor: 'from-blue-500 to-cyan-600' },
  { id: 'aereo' as const, nome: 'Aéreos', emoji: '🦅', cor: 'from-sky-500 to-indigo-600' },
  { id: 'extinto' as const, nome: 'Extintos', emoji: '🦖', cor: 'from-purple-500 to-pink-600' },
];

function AlbumContent() {
  const searchParams = useSearchParams();
  const categoriaUrl = searchParams.get('categoria') as CategoriaAnimal | null;
  
  const [categoriaAtiva, setCategoriaAtiva] = useState<'todas' | CategoriaAnimal>(categoriaUrl || 'todas');
  const [especies, setEspecies] = useState<EspecieAnimal[]>([]);

  useEffect(() => {
    if (categoriaAtiva === 'todas') {
      setEspecies(especiesDatabase);
    } else {
      setEspecies(getEspeciesPorCategoria(categoriaAtiva));
    }
  }, [categoriaAtiva]);

  const totalEspecies = especies.length;
  const desbloqueadas = especies.filter(e => e.desbloqueada).length;
  const percentual = Math.round((desbloqueadas / totalEspecies) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
            </Link>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900">Meu Álbum</h1>
              <p className="text-xs text-gray-600">Coleção de Espécies</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{percentual}%</div>
              <div className="text-xs text-gray-600">{desbloqueadas}/{totalEspecies}</div>
            </div>
          </div>

          {/* Barra de Progresso */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
              style={{ width: `${percentual}%` }}
            />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Filtros de Categoria */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filtrar por categoria</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaAtiva(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                  categoriaAtiva === cat.id
                    ? `bg-gradient-to-r ${cat.cor} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span className="text-lg">{cat.emoji}</span>
                <span className="text-sm">{cat.nome}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Figurinhas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {especies.map((especie) => (
            <Link key={especie.id} href={`/especie/${especie.id}`}>
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-gray-100">
                {/* Imagem */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                  {especie.desbloqueada ? (
                    <>
                      <Image
                        src={especie.imagemUrl}
                        alt={especie.nome}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/50">
                      <Lock className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-3">
                  <h3 className={`font-bold text-sm mb-1 ${especie.desbloqueada ? 'text-gray-900' : 'text-gray-400'}`}>
                    {especie.desbloqueada ? especie.nome : '???'}
                  </h3>
                  <p className={`text-xs italic ${especie.desbloqueada ? 'text-gray-600' : 'text-gray-400'}`}>
                    {especie.desbloqueada ? especie.nomeCientifico : 'Não desbloqueada'}
                  </p>
                </div>

                {/* Badge de Categoria */}
                <div className="absolute top-2 left-2">
                  <div className={`px-2 py-1 rounded-lg text-xs font-bold text-white shadow-lg bg-gradient-to-r ${
                    categorias.find(c => c.id === especie.categoria)?.cor || 'from-gray-500 to-gray-600'
                  }`}>
                    {categorias.find(c => c.id === especie.categoria)?.emoji}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mensagem se não houver espécies */}
        {especies.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhuma espécie encontrada</h3>
            <p className="text-gray-600">Tente selecionar outra categoria</p>
          </div>
        )}

        {/* Call to Action */}
        {desbloqueadas === 0 && (
          <div className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Comece sua coleção!</h3>
            <p className="text-blue-100 mb-4">Use a câmera para identificar animais e desbloquear figurinhas</p>
            <Link href="/identificar">
              <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors">
                Identificar Primeiro Animal
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AlbumPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </div>
    }>
      <AlbumContent />
    </Suspense>
  );
}
