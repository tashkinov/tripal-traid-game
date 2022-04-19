import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Text from './components/Text';
import Footer from './components/Footer';

function App() {
  return (
      <>
          <Header/>
          <Slider/>
          <Text element={'div'}>
              <Text element={'p'}>Text p</Text>
              <Text element={'span'}>Text span</Text>
              <Text element={'p'} italic>Text p italic</Text>
              <Text element={'strong'} bold>Text p strong</Text>
              <Text element={'p'} disabled>Text p disabled</Text>
          </Text>
          <Footer/>
      </>
  );
}

export default App;