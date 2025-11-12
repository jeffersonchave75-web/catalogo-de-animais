'use client';

import { useState, useEffect, Suspense } from 'react';
import { ArrowLeft, Filter, Loader2 } from 'lucide-react';
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

function CatalogoContent() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
            </Link>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900">Catálogo de Espécies</h1>
              <p className="text-xs text-gray-600">{totalEspecies} espécies catalogadas</p>
            </div>
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

        {/* Grid de Espécies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {especies.map((especie) => (
            <Link key={especie.id} href={`/especie/${especie.id}`}>
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-gray-100">
                {/* Imagem */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={especie.imagemUrl}
                    alt={especie.nome}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-3">
                  <h3 className="font-bold text-sm mb-1 text-gray-900">
                    {especie.nome}
                  </h3>
                  <p className="text-xs italic text-gray-600">
                    {especie.nomeCientifico}
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
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Identifique Animais em Tempo Real</h3>
          <p className="text-blue-100 mb-4">Use a câmera para identificar qualquer espécie instantaneamente</p>
          <Link href="/identificar">
            <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors">
              Abrir Identificador
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CatalogoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </div>
    }>
      <CatalogoContent />
    </Suspense>
  );
}
