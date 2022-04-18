import { useState } from 'react';
import Header from './components/Header'
import HeightInput from './components/HeightInput';
import Main from './components/Main';
import WeightInput from './components/WeightInput';


export default function App() {
  const [height, setHeight] = useState(1.50);
  const [weight, setWeight] = useState(90);


  function handleHeightChange(newHeight) {
    setHeight(newHeight);
}

  function handleWeightChange(newWeight) {
    setWeight(newWeight);
}


  let imc = (weight/(height*height))
  let imcToShow = imc.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  
  let result = 
    imc >= 40 ?
    'OBESIDADE III':
    imc >= 35 ?
    "OBESIDADE II":
    imc >= 30 ?
    "OBESIDADE I":
    imc >= 25 ?
    "PRÉ-OBESO":
    imc >= 18.5 ?
    "Adequeado":
    imc >= 17 ?
    "Magreza I":
    imc >= 16 ?
    "Magreza II":
    "Magreza III"

  return (
    <>
      <Header />

      <Main>
        <HeightInput 
          labelDescription = 'Digite sua altura (decimais com pontos Ex: 1.50):'
          inputValue={height}
          onInputChange={handleHeightChange}
          autoFocus
        />

        <WeightInput 
          labelDescription = 'Digite seu peso (decimais com pontos Ex: 80.5):'
          inputValue={weight}
          onInputChange={handleWeightChange}
          autoFocus
        />

        <p>Seu IMC é: {imcToShow} - {result}.</p>
      </Main>

    </>
  );
}
