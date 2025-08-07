const data = [
    { name: 'Brasil', orders: 605, sales: 41, status: 'NEW' },
    { name: 'USA', orders: 428, sales: 51, status: 'IMPORTANT' },
    { name: 'España', orders: 585, sales: 80, status: 'ACTIVE' },
    { name: 'Prague', orders: 416, sales: 78, status: 'NEW' },
    { name: 'China', orders: 709, sales: 89, status: 'GREAT' },
    { name: 'India', orders: 583, sales: 68, status: 'GREAT' },
  ];
  
  const getStatusClass = (status) => {
    switch (status) {
      case 'NEW':
        return 'bg-blue-200 text-blue-800';
      case 'IMPORTANT':
        return 'bg-yellow-200 text-yellow-800';
      case 'ACTIVE':
        return 'bg-green-200 text-green-800';
      case 'GREAT':
        return 'bg-purple-200 text-purple-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };
  
  export default function Countries() {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold">Countries</h2>
            <p className="text-gray-500">Best online markets</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 20h5v-5M20 4h-5v5" />
              </svg>
            </button>
          </div>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500">
              <th className="py-2">COUNTRY</th>
              <th className="py-2">ORDERS</th>
              <th className="py-2">SALES</th>
              <th className="py-2">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.name} className="border-b">
                <td className="py-2 flex items-center">
                  <img src={`https://flagcdn.com/16x12/${item.name.toLowerCase()}.png`} alt={item.name} className="w-4 h-3 mr-2" />
                  {item.name}
                </td>
                <td className="py-2">{item.orders}</td>
                <td className="py-2">{item.sales}</td>
                <td className="py-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(item.status)}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }