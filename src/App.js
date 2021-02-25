import './App.css';
import Card from './components/Card';

function App() {
  const cardImgUrl = "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80";
  const cardText = "Aloe Vera Plant";
  const cardImgAlt = "A succulent";

  return (
    <section className="App">
      <header className="app-header">Plant app</header>
      <main className="cards-container">
        <Card img={cardImgUrl} imgAlt={cardImgAlt} text={cardText} />
        <Card img={cardImgUrl} imgAlt={cardImgAlt} text={cardText} />
        <Card img={cardImgUrl} imgAlt={cardImgAlt} text={cardText} />
      </main>
    </section>
  );
}

export default App;
