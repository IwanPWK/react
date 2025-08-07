import Chart from './components/Chart';
import Countries from './components/Countries';

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-bold">Online store</h1>
          <p className="text-gray-400">Weekly sales</p>
          <Chart />
        </div>
        <div>
          <Countries />
        </div>
      </div>
    </div>
  );
}