import './dist/output.css';
import FirstPage from './components/LandingPage';
import SecondPage from './components/WeatherPage';
function App() {
  return (
    <FirstPage />
  );
}
//npx tailwindcss -i ./src/index.css -o ./src/dist/output.css --watch
export default App;
