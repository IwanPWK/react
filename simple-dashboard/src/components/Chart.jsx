import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Online', value: 400 },
  { name: 'Offline', value: 300 },
  { name: 'In store', value: 200 },
];
const COLORS = ['#FF444A', '#3B82F6', '#FFC107'];

export default function Chart() {
  return (
    <div className="w-full max-w-md mx-auto">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center space-x-4 text-white">
        <div className="flex items-center">
          <span className="w-3 h-3 mr-2" style={{ backgroundColor: '#FF444A' }}></span>
          <span>Online</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 mr-2" style={{ backgroundColor: '#3B82F6' }}></span>
          <span>Offline</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 mr-2" style={{ backgroundColor: '#FFC107' }}></span>
          <span>In store</span>
        </div>
      </div>
    </div>
  );
}