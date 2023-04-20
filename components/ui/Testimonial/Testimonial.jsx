import SectionWrapper from "@/components/SectionWrapper"
import GradientWrapper from "@/components/GradientWrapper"
import user1 from "@/public/testimonial/user1.svg"
import user2 from "@/public/testimonial/user2.webp"
import user3 from "@/public/testimonial/user3.webp"
import user4 from "@/public/testimonial/user4.webp"
import user5 from "@/public/testimonial/user5.webp"
import user6 from "@/public/testimonial/user6.webp"
import Image from "next/image"
import LayoutEffect from "@/components/LayoutEffect"

const Testimonial = () => {
	const testimonials = [
		{
			avatar: user1,
			name: "Felindra Tetdetigre",
			title: "Personnel d'aéroport",
			quote: "nous utilisons Signlab depuis un an maintenant, l'expérience des personnes malentendantes en aéroport n'a fait que s'améliorer.",
		},
		{
			avatar: user2,
			name: "Samy",
			title: "Personne malentendante",
			quote: "🫰✌️🤘🤌🖐🫱🫵👐",
		},
		{
			avatar: user3,
			name: "Patrice Huchard",
			title: "Président de ADMAGB",
			quote: "Nous recommandons vivement l'utilisation de signlab au quotidien. Une solution pratique, simple d'utilisation et améliorant le quotidien de tous.",
		},
		{
			avatar: user4,
			name: "Ezekiel Audax",
			title: "Conseiller de vente",
			quote: "Il est maintenant possible pour moi de conseiller correctement mes clients sans prendre le risque de me faire mal comprendre. Incroyable !",
		},
		{
			avatar: user5,
			name: "Youri Tibidi",
			title: "Soignant zoo (tortues)",
			quote: "Grâce à Signlab© je peux parler des tortues de maniere simple et efficace au zoo où je travaille.",
		},
		{
			avatar: user6,
			name: "Alexandre N.",
			title: "Dentiste",
			quote: "Dans ma profession la communication est une priorité. Je peux donc sereinement accueilir tous les patients et me faire comprendre sans encombre. 🦷",
		},
	]

	return (
		<SectionWrapper>
			<div id="testimonials" className="custom-screen text-gray-300">
				<div className="max-w-2xl text-center md:mx-auto">
					<h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">Signlab est apprécié à travers la France pour son efficacité</h2>
				</div>
				<GradientWrapper wrapperClassName="max-w-sm h-40 top-12 inset-x-0" className="mt-12">
					<LayoutEffect
						className="duration-1000 delay-300"
						isInviewState={{
							trueState: "opacity-1",
							falseState: "opacity-0 translate-y-12",
						}}
					>
						<ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
							{testimonials.map((item, idx) => (
								<li
									key={idx}
									className="p-4 rounded-xl border border-gray-800"
									style={{
										backgroundImage: "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)",
									}}
								>
									<figure className="flex flex-col justify-between gap-y-6 h-full">
										<blockquote className="">
											<p className="">{item.quote}</p>
										</blockquote>
										<div className="flex items-center gap-x-4">
											<Image src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
											<div>
												<span className="block text-gray-50 font-semibold">{item.name}</span>
												<span className="block text-sm mt-0.5">{item.title}</span>
											</div>
										</div>
									</figure>
								</li>
							))}
						</ul>
					</LayoutEffect>
				</GradientWrapper>
			</div>
		</SectionWrapper>
	)
}

export default Testimonial
