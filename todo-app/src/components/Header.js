import { useState } from 'react';
import './Header.css'

function Header(){
  const [mode, setMode] = useState(true);
  if(mode) {
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
  }
  
return (
  <header className='Header-img'>
    <div>
      <h1>Todo</h1>
    </div>
    <div>
      <button className={`${mode === true ? "moon" : "sun"} ${"btnTheme"}`}
      onClick={() => {setMode(!mode)}}>
        
      </button>
    </div>
  </header>
);
}
//   }
// }


export default Header;