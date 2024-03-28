import './App.css';
import self from './img/Cheche.png';
import puppy3 from './img/puppy3.png';
import cat from './img/cat.png';
import penguin from './img/penguin.png';
import chiikawa3 from './img/치이카와3.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>
          긍정적 마인드 유지 / 매주 배운 것 복습 / 절약 정신
        </h4>
        <div className="self-photo" style={{ position: 'relative' }}>
          <img src={self} className='my_pic' alt="my_pic" />
        </div>
        <img src={puppy3} className='puppy3' alt="like_pic" />
        <img src={cat} className='cat' alt="like_pic" />
        <img src={penguin} className='penguin' alt="like_pic" />
        <img src={chiikawa3} className='chiikawa3' alt="like_pic" />
        <h1>
          권채은
        </h1>
        <h3>
          #INFP #21 #PARD_WEB #codms_rnjs
        </h3>
        <h3>
        🩷 Aminals, Music, Chiikawa 🩷
        </h3>
      </header>
    </div>
  );
}

export default App;
