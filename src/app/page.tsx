'use client';

import Image from 'next/image';
import { categorias } from '@/app/data/categorias';
import Carousel from "@/app/component/carousel";

const slides = [
    "/topo.jpg",
    "/entrada.jpg"
]

export default function Home() {
    return (
        <section className="text-gray-600 body-font">
            <Carousel autoSlide={true} autoSlideInterval={3000}>
                {slides.map((s, index) => (
                    <div key={index} className="min-w-full h-full relative flex items-center justify-center">
                        <Image src={s} alt={`Slide ${index}`} fill className="object-cover" />
                    </div>
                ))}
            </Carousel>
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-extrabold text-gray-800">Encontra peças auto no nosso catálogo</h1>
                    <p className="text-gray-500 mt-2 text-lg">
                        Nem todo o nosso stock se encontra disponível no website.
                        Caso não encontre o que procura ou pretenda um orçamento personalizado, não hesite em contactar-nos.                </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categorias.map((categoria, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-sm hover:shadow-md rounded-md text-center p-4 transition"
                        >
                            <div className="h-28 relative mb-4">
                                <Image
                                    src={categoria.imagem}
                                    alt={categoria.nome}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="font-medium text-sm md:text-base">{categoria.nome}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
