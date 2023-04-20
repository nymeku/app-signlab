import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

const faqsList = [
    {
        q: "Qu'est-ce qu'un outil de traduction de langue des signes ?",
        a: "Un outil de traduction de langue des signes est un outil qui vous permet de traduire des milliers de phrases en langue des signes en quelques secondes.",
    },
    {
        q: "Quels sont les bénéfices d'un outil de traduction de langue des signes ?",
        a: "La satisfaction client est l'un des principaux facteurs de succès d'une entreprise. Un outil de traduction de langue des signes vous permet de traduire des milliers de phrases en langue des signes en quelques secondes.",
    },
    {
        q: "Comment démarrer avec un outil de traduction de langue des signes ?",
        a: "Pour commencer, vous devez créer un compte sur notre site web. Une fois que vous avez créé votre compte, vous pouvez commencer à traduire des milliers de phrases en langue des signes en quelques secondes.",
    },
    {
        q: "Qui peut utiliser un outil de traduction de langue des signes ?",
        a: "Les outils de traduction de langue des signes peuvent être utilisés par toute personne souhaitant communiquer avec des personnes sourdes ou malentendantes"
    },
    {
        q: "Comment une IA de traduction de langue des signes fonctionne-t-elle ?",
        a: "Le processus de traduction commence par la capture d'une vidéo des gestes de la langue des signes. Cette vidéo est ensuite analysée par l'IA, qui utilise des algorithmes de reconnaissance d'image pour identifier les gestes et les mouvements effectués par l'utilisateur de la langue des signes"
    },
    {
        q: "Dans quel cadre puis-je utiliser Sign Lab ?",
        a: "Un outil de traduction de langue des signes peut être utilisé dans de nombreux contextes pour aider les personnes sourdes ou malentendantes à communiquer plus facilement avec les personnes qui ne comprennent pas la langue des signes",
    }
]

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    Tout ce que vous devez savoir
                </h2>
                <p className="mt-3">
                    Nous avons rassemblé les questions les plus fréquemment posées par nos clients
                </p>
            </div>
            <div className='mt-12'>
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12"
                    }}
                >
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-100">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs