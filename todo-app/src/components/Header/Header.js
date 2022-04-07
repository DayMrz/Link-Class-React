import './Header.css'

function Header({ toggleTheme, mode }) {

  return (
    <header className='header'>
      <div className="wrapper">
        <h1 className="title">Todo</h1>

        <button
          className={`${mode} btnTheme`}
          onClick={() => { toggleTheme() }}
        />
      </div>
    </header>
  );
}


export default Header;
