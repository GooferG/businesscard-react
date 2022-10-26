import './App.css';
import Card from './components/Card';
import Container from './components/Container';
import profilePic from './assets/profile_Pic.jpg';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <div>
            <img src={profilePic} className="image" alt="" />
          </div>
          <Content />
          <Footer />
        </Card>
      </Container>
    </div>
  );
}

export default App;
