import {
    FaFacebookF,
    FaPhoneAlt,
    FaWhatsapp,
} from 'react-icons/fa';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white relative">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
                {/* Coluna 1 */}
                <div>
                    <h3 className="font-bold mb-4">MINHA CONTA</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#">Encomendas</a></li>
                        <li><a href="#">Moradas</a></li>
                        <li><a href="#">Detalhes da conta</a></li>
                        <li><a href="#">Recuperar senha</a></li>
                    </ul>
                </div>

                {/* Coluna 2 */}
                <div>
                    <h3 className="font-bold mb-4">INFORMAÇÃO</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#">Entregas e Devoluções</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Termos e Condições de Uso</a></li>
                        <li><a href="#">Livro de reclamações</a></li>
                        <li><Link href="/contact">Contacto</Link></li>
                    </ul>
                </div>

                {/* Coluna 3 */}
                <div>
                    <h3 className="font-bold mb-4">CONTACTE-NOS</h3>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://facebook.com/kvn.motores" target="_blank" rel="noopener noreferrer"  className="flex items-center space-x-2 text-white hover:text-gray-300">
                            <FaFacebookF className="cursor-pointer" />
                        </a>
                        <a href="tel:+351933059881" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-gray-300">
                            <FaPhoneAlt className="cursor-pointer" />
                        </a>
                    </div>
                    <p className="text-white font-medium">+351 933059881</p>
                    <p className="text-gray-400 text-xs mt-1">(chamada para a rede móvel nacional)</p>
                </div>
            </div>

            {/* Parte inferior */}
            <div className="border-t border-gray-600 py-4 px-6 flex flex-col md:flex-row justify-center items-center text-sm">
                <p className="text-gray-300">Copyright 2007 © <span className="font-bold">KVN Motores</span></p>
            </div>

            {/* Botão WhatsApp */}
            <a
                href="https://wa.me/351933059881"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50"
            >
                <FaWhatsapp size={24} />
            </a>

        </footer>
    );
}