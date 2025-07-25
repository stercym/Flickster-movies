import ThemeToggle from './components/ThemeToggle';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="p-6 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <ThemeToggle />
      <h1 className="text-2xl font-bold my-4">The Batman (2022)</h1>
      <StarRating />
    </div>
  );
}

export default App;
