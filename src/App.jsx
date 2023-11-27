import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [can, setCan] = useState(0);
  const [tuba, setTuba] = useState(0);

  useEffect(() => {
    console.log("ilk kez render edildiğinde çalışır daha da çalışmaz");
  }, []);

  useEffect(() => {
    console.log("her zaman çalışır");
  });

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde çalışır ve can değerinde bir değişiklik olduğunda çalışır"
    );
  }, [can]);

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde çalışır ve tuba değerinde bir değişiklik olduğunda çalışır"
    );
  }, [tuba]);

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde çalışır, can veya tuba değerinde bir değişiklik olduğunda çalışır"
    );
  }, [can, tuba]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setCan(can + 1)}>Can ++</button>
        <div>Can:{can}</div>
      </div>
      <div>
        <button onClick={() => setTuba(tuba + 1)}>Tuba ++</button>
        <div>Tuba: {tuba}</div>
      </div>
    </div>
  );
}

export default App;
