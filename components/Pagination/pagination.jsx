import { useState } from "react"

const Pagination = () => {

    const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10",])
    const [currentPage, setCurrentPage] = useState(1)

    const handlePage = (type) => {
        if (type) setCurrentPage(currentPage + 1)
        else setCurrentPage(currentPage - 1)
    }

    return (
        <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
            <div className="text-white hidden justify-between text-sm md:flex">
                <div>
                   1-10 sur 120
                </div>
                <div className="flex items-center gap-12" aria-label="Pagination">
                    <a onClick={() => handlePage(false)} className="text-white hover:text-indigo-600 cursor-pointer">
                        Précédent
                    </a>
                    <ul className="flex items-center gap-1 text-white">
                        {
                            pages.map((item, idx) => (
                                <li key={item}>
                                    {
                                        item == "..." ? (
                                            <div>
                                                {item}
                                            </div>
                                        ) : (

                                            <a onClick={() => setCurrentPage(parseInt(item))} aria-current={currentPage == item ? "page" : false} className={`px-3 py-2 rounded-lg duration-150 cursor-pointer hover:text-white hover:bg-indigo-600 ${currentPage == item ? "bg-indigo-600 text-white font-medium" : ""}`}>
                                                {item}
                                            </a>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                    <a onClick={() => handlePage(true)} className="text-white hover:text-indigo-600 cursor-pointer">
                        Suivant
                    </a>
                </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
                <a onClick={() => handlePage(false)} className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Précédent</a>
                <div className="font-medium text-white">
                    1-10 OF 120
                </div>
                <a onClick={() => handlePage(true)} className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Suivant</a>
            </div>
        </div>
    )
}

export default Pagination