import { useState } from 'react';


const ProjectForm = () => {
    const [manager, setManager] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (event) => {
        const { value } = event.target;
        setManager(value);

        // if (value.length > 2) {
        //     const results = await searchStaff(value);
        //     setSearchResults(results);
        // } else {
        //     setSearchResults([]);
        // }
    };
    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectName">
                    Nombre del Proyecto
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="projectName" type="text" placeholder="Nombre del Proyecto" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                    Nombre de la Empresa
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="companyName" type="text" placeholder="Nombre de la Empresa" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectImage">
                    Foto del Proyecto
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="projectImage" type="file" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Descripción
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Descripción"></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectManager">
                    Encargado del Proyecto
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="projectManager" type="text" placeholder="Nombre del Encargado" value={manager} onChange={handleSearch} />
                {searchResults.length > 0 && (
                    <div className="border border-gray-300 mt-2">
                        {searchResults.map((result) => (
                            <div key={result.id} onClick={() => { setManager(result.name); setSearchResults([]); }} className="p-2 hover:bg-gray-200 cursor-pointer">
                                {result.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Registrar Proyecto
                </button>
            </div>
        </form>
    );
}

export default ProjectForm;