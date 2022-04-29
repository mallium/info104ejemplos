import Head from "next/head";
import { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <Head>
        <title>Contador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{}}>
        <h1 className="counter">{count}</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <button
            className="botonContador"
            id="incButton"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Incrementar!
          </button>
          <button
            className="botonContador"
            id="resetButton"
            onClick={() => {
              setCount(0);
            }}
          >
            Borrar
          </button>
        </div>
      </main>
    </div>
  );
};
export default Contador;
