import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";

export default function ContactPage() {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="bg-gray-50 flex flex-col items-center py-12 px-6">
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-extrabold text-gray-800">Contacte-nos!</h1>
                    <p className="text-gray-500 mt-2 text-lg">
                        Estamos prontos para responder às suas questões com a máxima brevidade.
                    </p>
                </div>

                <div
                    className="flex flex-col lg:flex-row items-stretch w-full max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center px-10 py-8 lg:w-1/2 bg-white space-y-6">
                        <div className="flex items-center text-gray-700">
                            <FaPhoneAlt className="text-blue-600 text-xl mr-4"/>
                            <span className="text-lg">933059881</span>
                        </div>

                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="text-blue-600 text-xl mr-4"/>
                            <span className="text-lg">kvn.motores@sapo.pt</span>
                        </div>

                        <div className="flex items-start text-gray-700">
                            <FaMapMarkerAlt className="text-blue-600 text-xl mr-4 mt-1"/>
                            <span className="text-lg leading-relaxed">
              Rua do Ouro, lote 10, Parque Industrial Vale do Alecrim<br/>
              2950-007 Pinhal Novo
            </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block w-px bg-gray-200"></div>

                    {/* Google Map */}
                    <div className="lg:w-1/2 w-full h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.71172883075843!2d-8.909918470039331!3d38.608924194067434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1940d91e7e3899%3A0x349ebd7be13f88ce!2sR.%20do%20Ouro%2010%2C%20Palmela!5e0!3m2!1spt-PT!2spt!4v1754523740960!5m2!1spt-PT!2spt"
                            width="100%"
                            height="100%"
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
