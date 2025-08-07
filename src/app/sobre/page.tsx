export default function SobrePage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-[#213b6a] mb-6">
                Sobre a KVN Motores, Unipessoal Lda
            </h1>

            <p className="text-lg text-gray-700 mb-4">
                A <strong>KVN Motores, Unipessoal Lda</strong> é uma empresa portuguesa, constituída em 9 de fevereiro de 2007, com sede em Palmela, distrito de Setúbal
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Especializamo‑nos no comércio por grosso e a retalho de peças e acessórios para veículos automóveis. As nossas actividades incluem ainda desmantelamento responsável para recuperação de materiais recicláveis.
            </p>

            <h2 className="text-2xl font-semibold text-[#213b6a] mt-10 mb-4">
                A nossa missão
            </h2>
            <p className="text-lg text-gray-700 mb-4">
                Oferecer soluções em motores automóveis com qualidade, confiança e procedência garantida. Alinhamos preço justo e qualidade para satisfazer clientes finais, oficinas e revendedores.
            </p>

            <h2 className="text-2xl font-semibold text-[#213b6a] mt-10 mb-4">
                Contacte‑nos
            </h2>
            <p className="text-lg text-gray-700">
                Deseja saber mais ou solicitar um orçamento? <br />
                <a href="/contacto" className="text-[#8b1e2e] font-medium hover:underline">
                    Envie-nos uma mensagem
                </a> e descubra como a KVN Motores pode dar resposta às suas necessidades.
            </p>
        </main>
    );
}