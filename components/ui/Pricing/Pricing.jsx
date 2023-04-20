import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "../Button";
import { useRouter } from "next/router";

const Pricing = () => {
    const router = useRouter()
    const plans = [
        {
            name: "Basic",
            desc: "Pour essayer la puissance de Sign Lab",
            price: 0,
            isMostPop: false,
            features: [
                "300 traductions par jour",
                "Traduction en temps réel",
                "Suivi des traductions",
                "1 utilisateur",
                "Support technique",
                "Accès à la documentation",
            ],
        },
        {
            name: "Starter",
            desc: "Idéal pour les petites entreprises",
            price: 12,
            isMostPop: true,
            features: [
                "5000 traductions par jour",
                "Personnalisation des traductions",
                "Statistiques avancées",
                "Gestion des utilisateurs",
                "5 utilisateurs",
                "Support technique",
            ],
        },
        {
            name: "Business",
            desc: "Idéal pour les grandes entreprises",
            price: 32,
            isMostPop: false,
            features: [
                "Traductions illimitées",
                "Personnalisation des traductions",
                "Statistiques avancées",
                "IA personnalisée",
                "Utilisateurs illimités",
                "Support personnalisé",
            ],
        },
    ];

    const mostPopPricingBg = "radial-gradient(130.39% 130.39% at 51.31% -0.71%, #1F2937 0%, rgba(31, 41, 55, 0) 100%)"

    return (
        <SectionWrapper id="pricing" className='custom-screen'>
            <div className='relative max-w-xl mx-auto text-center'>
                <h2 className='text-gray-50 text-3xl font-semibold sm:text-4xl'>
                    Choisissez l'offre qui vous convient
                </h2>
            </div>
            <LayoutEffect
                className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border border-gray-800 mt-6 sm:mt-0 ${item.isMostPop ? "border border-purple-500" : ""}`}
                                style={{
                                    backgroundImage: item.isMostPop ? mostPopPricingBg : ""
                                }}
                            >
                                <div className="p-8 space-y-4 border-b border-gray-800 text-center">
                                    <span className='text-purple-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='text-gray-50 text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl text-gray-400 font-normal">/mo</span>
                                    </div>
                                    <p className="text-gray-400">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="p-8">
                                    <ul className='space-y-3'>
                                        {
                                            item.features.map((featureItem, idx) => (
                                                <li key={idx} className='flex items-center gap-5 text-gray-300'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='h-5 w-5 text-indigo-600'
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'>
                                                        <path
                                                            fill-rule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clip-rule='evenodd'></path>
                                                    </svg>
                                                    {featureItem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="pt-8">
                                        <Button onClick={() => router.push('/login')} className={`w-full rounded-full text-white ring-offset-2 focus:ring ${item.isMostPop ? "bg-purple-600 hover:bg-purple-500 focus:bg-purple-700 ring-purple-600" : "bg-gray-800 hover:bg-gray-700 ring-gray-800"}`}>
                                            Commencer
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </LayoutEffect>
        </SectionWrapper>
    );
};

export default Pricing