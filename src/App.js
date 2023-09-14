import { useState } from 'react';
import './App.css';
import Button from './componeat/Button';
import Email from './componeat/Email';
import Password from './componeat/Password';
import Tabal from './componeat/Tabal';


function App() {

  const [email, setEmail] = useState('');
  const myEmail = (i) => {
    setEmail(i.target.value)
  }
  const [password, setPassword] = useState('');
  const myPassword = (e) => {
    setPassword(e.target.value)

  }

  // const [button, setBtn] = useState('');

  const myBtn = () => {


    const allData = JSON.parse(localStorage.getItem("mystoreg")) || [];
    const data = {
      username: email,
      password: password
    }
    allData?.push(data)

    localStorage.setItem("mystoreg", JSON.stringify(allData));
    reset()
  }
const reset = () =>{
 setEmail("");
 setPassword("");

}

  return (
    <div className="App">
      <Email email={email} myEmail={myEmail} />
      <Password password={password} myPassword={myPassword} />
      <Button  myBtn={myBtn} />
      <Tabal/>
    </div>
  );
}

export default App;





