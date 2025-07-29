import './index.css';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/princess-bg.jpg')` }}
    >
      <audio autoPlay loop>
        <source src="/music/happy-birthday.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-extrabold mb-8 text-pink-300 drop-shadow-lg">
          🎉 Happy Birthday, Princesses! 👑
        </h1>

        <div className="mb-16">
          <h2 className="text-3xl mb-4 text-pink-100">👸 Sister 1</h2>
          <Slideshow folder="sister1" />
        </div>

        <div>
          <h2 className="text-3xl mb-4 text-pink-100">👸 Sister 2</h2>
          <Slideshow folder="sister2" />
        </div>
      </div>
    </div>
  );
}

export default App;
