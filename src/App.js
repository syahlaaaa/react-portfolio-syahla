import React from 'react';
import imgProject from './image/project.png'
import imgProfil from './image/profil.jpg'
import imgProject1 from './image/calculator.png'
import imgProject2 from './image/project2.png'
import imgProject3 from './image/Traffic light.png'
import imgProject4 from './image/kuning.png'
import imgProject5 from './image/hijau.png'



import './App.css';

function App() {
  return (
    <div className='window'>
      <div className="app">
        <header className="App-header">
          <h1>Haii i'm Calaa (❁´◡`❁)</h1>
          <img className='img-profil' src={imgProfil}></img>
        </header>
        <main>
          <section className="AboutMe"> 
            <p className='about'>Welcome!!!</p>
            <p className='about'>this is my Portfolio</p>
          </section>
          
          <section className="Projectt">
            <h2>Project Saya</h2>
            <div className="Project">
              <h3>Rock Paper Scissors by Phyton</h3>
              <p>Jadi Game Ini adalah Game gunting kertas batu dengan cara dipilih.</p>
              <img className='img-project' src={imgProject}></img>
              <h3>calculator with GUI by Phyton</h3>
              <img className='img-project' src={imgProject1}></img>
              <h3>Membuat form by Phyton</h3>
              <img className='img-project1' src={imgProject2}></img>
              <h3>Traffic light by Phyton</h3>
              <p>ini adalah project lampu merah yang di ambil dari studi kasus dunia nyata.</p>
              <img className='img-project2' src={imgProject3}></img>
              <div>
                <img className='img-project4' src={imgProject4}></img>
              </div>
              <div>
                <img className='img-project5' src={imgProject5}></img>
              </div>
            </div>

            <div>
              <h2>Kontak Saya</h2>
              <a href='https://www.instagram.com/dliyasyahlaaa?igsh=Y2NlbGdyZzE4cWJm&utm_source=qr'>instagram</a>
            </div>
            
          </section>
        </main>
        <footer>
          <p></p>
        </footer>
      </div>
    </div>
  );
}

export default App;