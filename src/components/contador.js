import React, { useState } from 'react';

function Contador() {
  const [contagem, setContagem] = useState(0);

  const incrementar = () => {
    setContagem(contagem + 1);
  };

  const decrementar = () => {
    setContagem(contagem - 1);
  };

  return (
    <div>
      <h2>Contagem: {contagem}</h2>
      <button onClick={incrementar}>Aumentar</button>
      <button onClick={decrementar}>Diminuir</button>
    </div>
  );
}

export default Contador;