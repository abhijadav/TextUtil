import { useState } from 'react';
import './App.css';
import Navbar from './componant/Navbar';
import Textform from './componant/Textform';
import Alert from './componant/Alert';
// import Textarea from './componant/Textarea';
// import { Error } from './componant/Error';
// import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState('');

  const showalert = (message,type)=>{
    setAlert({
    msg:message,
    type:type,
  });
    setTimeout(() => {
      setAlert('');
    }, 2000);
  }

  const modebutton = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#2e2e2d';
      showalert(' : Dark mode has been Enabled!','success');
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert(' : Light mode has been Enabled!','success');
      document.title='TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" name="Home"  mode={mode} modebutton={modebutton} />
      <Alert alert={alert} />
      <Textform title="Enter your text here to Transform" showalert={showalert} mode={mode} />
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path="/" element={<Navbar title="TextUtils" name="Home"  mode={mode} modebutton={modebutton} />}> */}
            {/* <Route index element={<><Alert alert={alert} /> <Textform title="Enter your text here to Transform" showalert={showalert} mode={mode} /></>} /> */}

            {/* <Route path="about" element={<Textarea />} /> */}

            {/* <Route path='*' element={<Error />}></Route> */}

            {/* <Route path="Contact" element={<Contact />} /> */}
          {/* </Route> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;