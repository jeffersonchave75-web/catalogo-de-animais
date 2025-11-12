'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, Volume2, Play, Info, Award, MapPin, Utensils, Heart, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getEspeciePorId, EspecieAnimal } from '@/lib/especies-data';
import { useParams } from 'next/navigation';

export default function EspeciePage() {
  const params = useParams();
  const [especie, setEspecie] = useState<EspecieAnimal | null>(null);

  useEffect(() => {
    if (params.id) {
      const especieEncontrada = getEspeciePorId(params.id as string);
      setEspecie(especieEncontrada || null);
    }
  }, [params.id]);

  if (!especie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Espécie não encontrada</h2>
          <Link href="/album">
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Voltar ao Álbum
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const categoriaInfo = {
    terrestre: { cor: 'from-amber-500 to-orange-600', emoji: '🦁' },
    aquatico: { cor: 'from-blue-500 to-cyan-600', emoji: '🐋' },
    aereo: { cor: 'from-sky-500 to-indigo-600', emoji: '🦅' },
    extinto: { cor: 'from-purple-500 to-pink-600', emoji: '🦖' },
  };

  const catInfo = categoriaInfo[especie.categoria];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header com Imagem Hero */}
      <div className="relative h-80 sm:h-96">
        <Image
          src={especie.imagemUrl}
          alt={especie.nome}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Botão Voltar */}
        <Link href="/album">
          <button className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-xl flex items-center justify-center transition-colors shadow-lg">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </button>
        </Link>

        {/* Badge de Categoria */}
        <div className="absolute top-4 right-4">
          <div className={`px-4 py-2 rounded-xl text-sm font-bold text-white shadow-lg bg-gradient-to-r ${catInfo.cor} flex items-center gap-2`}>
            <span className="text-lg">{catInfo.emoji}</span>
            <span className="capitalize">{especie.categoria}</span>
          </div>
        </div>

        {/* Título sobre a imagem */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{especie.nome}</h1>
          <p className="text-xl text-white/90 italic">{especie.nomeCientifico}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Controles de Mídia */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
            <Volume2 className="w-5 h-5" />
            Ouvir Som
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
            <Play className="w-5 h-5" />
            Ver Vídeo
          </button>
        </div>

        {/* Som Emitido */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-6 border border-indigo-200">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="w-5 h-5 text-indigo-600" />
            <span className="font-bold text-indigo-900">Som Característico</span>
          </div>
          <p className="text-indigo-800">{especie.somEmitido}</p>
        </div>

        {/* Descrição */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-5 h-5 text-gray-700" />
            <h2 className="text-xl font-bold text-gray-900">Sobre a Espécie</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{especie.descricao}</p>
        </div>

        {/* Dados Científicos */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🔬</span>
            Taxonomia Científica
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <span className="text-sm text-gray-600">Classe</span>
              <p className="font-bold text-gray-900">{especie.classe}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <span className="text-sm text-gray-600">Ordem</span>
              <p className="font-bold text-gray-900">{especie.ordem}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <span className="text-sm text-gray-600">Família</span>
              <p className="font-bold text-gray-900">{especie.familia}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <span className="text-sm text-gray-600">Gênero</span>
              <p className="font-bold text-gray-900 italic">{especie.genero}</p>
            </div>
          </div>
        </div>

        {/* Métricas Biológicas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5" />
              <span className="text-sm text-blue-100">Peso Médio</span>
            </div>
            <p className="text-2xl font-bold">{especie.pesoMedio}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📏</span>
              <span className="text-sm text-purple-100">Tamanho</span>
            </div>
            <p className="text-2xl font-bold">{especie.alturaComprimento}</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm text-emerald-100">Expectativa</span>
            </div>
            <p className="text-2xl font-bold">{especie.expectativaVida}</p>
          </div>
        </div>

        {/* Habitat e Dieta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-gray-900">Habitat</h3>
            </div>
            <p className="text-gray-700">{especie.habitat}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Utensils className="w-5 h-5 text-orange-600" />
              <h3 className="font-bold text-gray-900">Dieta</h3>
            </div>
            <p className="text-gray-700">{especie.dieta}</p>
          </div>
        </div>

        {/* Status de Conservação */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-amber-900">Status de Conservação</h3>
          </div>
          <p className="text-amber-800 font-medium">{especie.statusConservacao}</p>
        </div>

        {/* Curiosidades */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✨</span>
            Curiosidades
          </h2>
          <ul className="space-y-3">
            {especie.curiosidades.map((curiosidade, index) => (
              <li key={index} className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                <span className="text-blue-600 font-bold text-lg mt-0.5">{index + 1}</span>
                <span className="text-gray-700 flex-1">{curiosidade}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Botão Voltar */}
        <Link href="/album">
          <button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold py-4 px-6 rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg">
            Voltar ao Álbum
          </button>
        </Link>
      </div>
    </div>
  );
}
