import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form">
        <p className="text">Imię:</p>
        <br />
        <input type="text" className="inputText" minlength="2"></input>
        <br /> 
        <br />

        <p className="text">Nazwisko:</p>
        <br />
        <input type="text" className="inputText" minlength="2"></input>
        <br />
        <br />

        <p className="text">E-mail:</p>
        <br />
        <input type="email"className="inputText"></input>
        <br />
        <br />

        <p className="text">Hasło:</p>
        <br />
        <input type="password" className="inputText" minlength="8" ></input> /*min 2 numbers, 3 special types*/
        <br />
        <br />

        <p className="text">Potwierdź hasło:</p>
        <br />
        <input type="password" className="inputText" minlength="8" ></input> /*zgadza sie? */
        <br />
        <br />

        <p className="text">Wiek:</p>
        <br />
        <input type="number" minlength="18" maxlength="99"></input>
        <br />
        <br />

        <p className="text">Data urodzenia:</p>
        <br />
        <input type="date"></input> /*zgodna z wiekiem? */
        <br />
        <br />

        <p className="text">Kraj:</p>/*api */

        <p className="text">Płeć:</p>
        <br />
        <select>
          <option className="opcja">Kobieta</option>
          <option className="opcja">Mężczyzna</option>
          <option className="opcja">Helikopter</option>
        </select>
        <br />
        <br />

        <p className="text">Zgody marketingowe</p>
        <input type="checkbox" className="inputText" name="marketing"></input>
        <br />

        <p className="text">Zgoda na regulamin</p>
        <input type="checkbox" className="inputText" name="regulamin"></input>
        
      </div>
    </div>
  );
}

export default App;
