const CLientsTable = () => {

    

    return (

        <section className="antialiased text-gray-600  px-4 mt-32">
            <div className="flex flex-col justify-center">

                <div className="w-full max-w-screen-xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-semibold text-gray-800">Customers</h2>

                        <div className="relative flex flex-wrap items-center my-2">
                            <a href="javascript:void(0)" className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-orange-200 active:bg-light focus:bg-light bg-gray-200"> Add Client</a>
                        </div>
                    </header>

                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Email</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Phone</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Country</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                                <div className="font-medium text-gray-800">Alex Shatov</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">alexshatov@gmail.com</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">$2,890.66</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-lg text-center">🇺🇸</div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CLientsTable;