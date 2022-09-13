export default function TodoTable({ list = [], onDelete, onUpdate }) {
    const headers = [
        { text: "Number" },
        { text: "Text" },
        { text: "Edit" },
        { text: "Delete" },
    ];
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {
                                        headers.map((item, index) => {
                                            return (
                                                <th
                                                    key={`header_${index}_table_todos`}
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                                                >
                                                    { item.text }
                                                </th>
                                            );
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {
                                    list.length && list.map((item, index) => {
                                        return (
                                            <tr key={`todo_${item.id}`}>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    { index }
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    { item.text }
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                    <a onClick={() => onUpdate(item)} className="text-green-500 hover:text-green-700">
                                                        Edit
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                    <a onClick={() => onDelete(item.id)} className="text-red-500 hover:text-red-700">
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
