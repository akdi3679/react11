import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialisation de l'état
    this.state = {
      personne: {
        fullName: 'John Doe',
        bio: 'Développeur Web passionné par React.',
        imgSrc: 'https://randomuser.me/api/portraits/men/75.jpg',
        profession: 'Développeur Frontend'
      },
      show: false,
      timeElapsed: 0
    };
  }

  // Méthode pour basculer l'état 'show'
  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  // Utiliser setInterval pour calculer le temps écoulé
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000); // 1 seconde
  }

  // Nettoyer l'intervalle lorsque le composant est démonté
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { personne, show, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profil de la Personne</h1>
        <button onClick={this.toggleShow}>
          {show ? 'Masquer le Profil' : 'Afficher le Profil'}
        </button>

        {show && (
          <div>
            <img src={personne.imgSrc} alt={personne.fullName} />
            <h2>{personne.fullName}</h2>
            <p>{personne.bio}</p>
            <p><strong>{personne.profession}</strong></p>
          </div>
        )}

        <p>Temps écoulé depuis le montage : {timeElapsed} secondes</p>
      </div>
    );
  }
}

export default App;
