import { AiOutlinePlus } from "react-icons/ai"

const Table = ({ traductions }) => {
	// const tableItems = [
	// 	{
	// 		translation: "Vous avez 600g de marchand...",
	// 		position: "Paris",
	// 		duration: "1min42s",
	// 	},
	// 	{
	// 		translation: "Puis-je avoir un café s'il v...",
	// 		position: "Nice",
	// 		duration: "2min30s",
	// 	},
	// 	{
	// 		translation: "Pourquoi prenez-vous les comm...",
	// 		position: "Marseille",
	// 		duration: "6min30s",
	// 	},
	// 	{
	// 		translation: "Où se trouvent la porte d'emb...",
	// 		position: "Lille",
	// 		duration: "1min",
	// 	},
	// 	{
	// 		translation: "Vous avez besoin de mes...",
	// 		position: "Rennes",
	// 		duration: "3min42s",
	// 	},
	// 	{
	// 		translation: "Vous avez besoin de mes...",
	// 		position: "Rennes",
	// 		duration: "3min42s",
	// 	},
	// 	{
	// 		translation: "Vous avez besoin de mes...",
	// 		position: "Rennes",
	// 		duration: "3min42s",
	// 	},
	// 	{
	// 		translation: "Vous avez besoin de mes...",
	// 		position: "Rennes",
	// 		duration: "3min42s",
	// 	},
	// 	{
	// 		translation: "Vous avez besoin de mes...",
	// 		position: "Rennes",
	// 		duration: "3min42s",
	// 	},
	// 	{
	// 		translation: "Vous avez besoin de mes...",
	// 		position: "Rennes",
	// 		duration: "3min42s",
	// 	},
	// ]

<<<<<<< HEAD
    const tableItems = [
        {
            translation: "Vous avez 600g de marchand...",
            position: "Paris",
            duration: "1min42s"
        },
        {
            
            translation: "Puis-je avoir un café s'il v...",
            position: "Nice",
            duration: "2min30s"
        },
        {
        
            translation: "Pourquoi prenez-vous les comm...",
            position: "Marseille",
            duration: "6min30s"
        },
        {
          
            translation: "Où se trouvent la porte d'emb...",
            position: "Lille",
            duration: "1min"
        },
        {
            
            translation: "Vous avez besoin de mes...",
            position: "Rennes",
            duration: "3min42s"
        },
        {
       
            translation: "Vous avez besoin de mes...",
            position: "Rennes",
            duration: "3min42s"
        },
        {
          
            translation: "Vous avez besoin de mes...",
            position: "Rennes",
            duration: "3min42s"
        },
        {
         
            translation: "Vous avez besoin de mes...",
            position: "Rennes",
            duration: "3min42s"
        },
        {
            translation: "Vous avez besoin de mes...",
            position: "Rennes",
            duration: "3min42s"
        },
        {
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
=======
	return (
		<div className="max-w-screen-xl mx-auto px-4 md:px-8">
			<div className="items-start justify-between md:flex">
				<div className="max-w-lg">
					<h3 className="text-white text-xl font-bold sm:text-2xl">Historique des traductions</h3>
					<p className="text-white mt-2">Vous retrouvez ici toutes les traductions effectuées sur le compte de votre compagnie</p>
				</div>
			</div>
			<div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
				<table className="w-full table-auto text-sm text-left">
					<thead className="bg-gray-50 text-gray-600 font-medium border-b">
						<tr>
							<th className="py-3 px-6">Traduction</th>
							<th className="py-3 px-6">Durée</th>
							<th className="py-3 px-6">Actions</th>
						</tr>
					</thead>
					<tbody className="text-gray-600 divide-y">
						{traductions.map((item, idx) => (
							<tr key={idx} className="bg-white">
								<td className="px-6 py-4 whitespace-nowrap">{item.translation}</td>
								<td className="px-6 py-4 whitespace-nowrap">{item.duration}</td>
								<td className="text-right px-6 whitespace-nowrap">
									<button href="#" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-white duration-150 hover:bg-red-500 rounded-lg">
										Supprimer
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
>>>>>>> c5c5208a2fd6dfd3b164bbc5c99d660151ea8cd9
}

export default Table
