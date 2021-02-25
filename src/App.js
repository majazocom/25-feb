import './App.css';
import Card from './components/Card';
import plants from './assets/plants.json';

function App() {
  return (
    <section className="App">
      <header className="app-header">Plant app</header>
      <main className="cards-container">
        {
          plants.map(plant => <Card key={plant.id} img={plant.url} imgAlt={plant.altUrlText} title={plant.title} text={plant.text} />)
        }
      </main>
    </section>
  );
}

export default App;
