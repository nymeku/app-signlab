import { AiOutlinePlus } from 'react-icons/ai'

const Table = () => {

    const tableItems = [
        {
            avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
            name: "Bertrand Cantat",
            job: "Douanier Air France",
            translation: "Vous avez 600g de marchand...",
            position: "Paris",
            duration: "1min42s"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Sarah Connor",
            job: "Hôtesse Air France",
            translation: "Puis-je avoir un café s'il v...",
            position: "Nice",
            duration: "2min30s"
        },
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Stéphanie Leblanc",
            job: "Pilote KLM",
            translation: "Pourquoi prenez-vous les comm...",
            position: "Marseille",
            duration: "6min30s"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Olivier Mine",
            job: "Bagagiste Air France",
            translation: "Où se trouvent la porte d'emb...",
            position: "Lille",
            duration: "1min"
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Amelia Elijah",
            job: "Douanier Air France",
            translation: "Vous avez besoin de mes...",
            position: "Rennes",
            duration: "3min42s"
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Amelia Elijah",
            job: "Douanier Air France",
            translation: "Vous avez besoin de mes...",
            position: "Rennes",
            duration: "3min42s"
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Amelia Elijah",
            job: "Douanier Air France",
            translation: "Vous avez besoin de mes...",
            position: "Rennes",
            duration: "3min42s"
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Amelia Elijah",
            job: "Douanier Air France",
            translation: "Vous avez besoin de mes...",
            position: "Rennes",
            duration: "3min42s"
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Amelia Elijah",
            job: "Douanier Air France",
            translation: "Vous avez besoin de mes...",
            position: "Rennes",
            duration: "3min42s"
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Amelia Elijah",
            job: "Douanier Air France",
            translation: "Vous avez besoin de mes...",
            position: "Rennes",
            duration: "3min42s"
        },
    ]

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-white text-xl font-bold sm:text-2xl">
                        Historique des traductions
                    </h3>
                    <p className="text-white mt-2">
                        Vous retrouvez ici toutes les traductions effectuées sur le compte de votre compagnie
                    </p>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Opérateur</th>
                            <th className="py-3 px-6">Traduction</th>
                            <th className="py-3 px-6">Position</th>
                            <th className="py-3 px-6">Durée</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx} className="bg-white">
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                            <span className="block text-gray-700 text-xs">{item.job}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.translation}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.duration}</td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-white duration-150 hover:bg-[#805ad5] rounded-lg">
                                            Modifier
                                        </a>
                                        <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-white duration-150 hover:bg-red-500 rounded-lg">
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table