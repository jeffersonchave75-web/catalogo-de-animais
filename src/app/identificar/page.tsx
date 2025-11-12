'use client';

import { useState, useRef, Suspense } from 'react';
import { Camera, Upload, ArrowLeft, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

function IdentificarContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tipoPet = searchParams.get('tipo') === 'domestico';
  
  const [imagem, setImagem] = useState<string | null>(null);
  const [identificando, setIdentificando] = useState(false);
  const [resultado, setResultado] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagem(reader.result as string);
      identificarAnimal(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const identificarAnimal = async (imagemBase64: string) => {
    setIdentificando(true);
    setResultado(null);

    // Simulação de identificação (em produção, usar API de IA real)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Resultado mockado baseado no tipo
    const resultadoMock = tipoPet ? {
      especie: 'Cachorro Doméstico',
      nomeCientifico: 'Canis lupus familiaris',
      confianca: 95,
      categoria: 'terrestre',
      id: 'cachorro',
      mensagem: '✅ Animal identificado com sucesso!'
    } : {
      especie: 'Leão',
      nomeCientifico: 'Panthera leo',
      confianca: 92,
      categoria: 'terrestre',
      id: 'leao',
      mensagem: '✅ Espécie identificada com sucesso!'
    };

    setResultado(resultadoMock);
    setIdentificando(false);
  };

  const resetar = () => {
    setImagem(null);
    setResultado(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {tipoPet ? 'Identificar Pet' : 'Identificar Animal'}
              </h1>
              <p className="text-xs text-gray-600">
                {tipoPet ? 'Identifique raças de cães e gatos' : 'Use a câmera ou envie uma foto'}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {!imagem ? (
          // Tela de Upload
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {tipoPet ? 'Identificar Pet' : 'Identificação por Imagem'}
              </h2>
              <p className="text-gray-600 mb-8">
                {tipoPet 
                  ? 'Tire uma foto do seu cão ou gato para identificar a raça com precisão'
                  : 'Envie uma foto de qualquer animal e nossa IA identificará a espécie instantaneamente'
                }
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                className="hidden"
                id="camera-input"
              />

              <div className="space-y-3">
                <label htmlFor="camera-input">
                  <div className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                    <Camera className="w-5 h-5" />
                    Abrir Câmera
                  </div>
                </label>

                <label htmlFor="camera-input">
                  <div className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-4 px-6 rounded-xl cursor-pointer transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 flex items-center justify-center gap-2">
                    <Upload className="w-5 h-5" />
                    Escolher da Galeria
                  </div>
                </label>
              </div>
            </div>

            {/* Dicas */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Dicas para melhor identificação
              </h3>
              <ul className="space-y-2 text-sm text-amber-800">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Tire fotos com boa iluminação natural</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Enquadre o animal inteiro quando possível</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Evite fotos muito distantes ou desfocadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Para pets: capture características únicas da raça</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          // Tela de Resultado
          <div className="space-y-6">
            {/* Imagem Capturada */}
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-blue-100">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imagem}
                  alt="Animal capturado"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Status de Identificação */}
            {identificando && (
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 text-center">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Identificando...</h3>
                <p className="text-gray-600">Analisando a imagem com IA</p>
              </div>
            )}

            {/* Resultado */}
            {resultado && (
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 shadow-xl text-white">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-2">{resultado.mensagem}</h3>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-100">Espécie:</span>
                    <span className="font-bold">{resultado.especie}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-100">Nome Científico:</span>
                    <span className="font-medium italic">{resultado.nomeCientifico}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-100">Confiança:</span>
                    <span className="font-bold">{resultado.confianca}%</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => router.push(`/especie/${resultado.id}`)}
                    className="w-full bg-white text-emerald-600 font-bold py-4 px-6 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    Ver Ficha Completa
                  </button>
                  <button
                    onClick={resetar}
                    className="w-full bg-white/10 backdrop-blur-sm text-white font-medium py-4 px-6 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    Identificar Outro Animal
                  </button>
                </div>
              </div>
            )}

            {!identificando && !resultado && (
              <button
                onClick={resetar}
                className="w-full bg-white text-gray-700 font-medium py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors border-2 border-gray-200"
              >
                Tentar Novamente
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function IdentificarPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    }>
      <IdentificarContent />
    </Suspense>
  );
}
