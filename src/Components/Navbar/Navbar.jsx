import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
      <div className="navbar-brand">
        <a className='heading' href="#">AutoZapchast</a>
      </div>
      <div className='navbar-links'>
        <ul className='navbar-items'>
          <li className='navbar-item'>
            <a href="#offer">Qulayliklar</a>
          </li>
          <li className='navbar-item'>
            <a href="#user">Foydalanuvchilar</a>
          </li>
          <li className='navbar-item'>
            <a href="#partner">Hamkorlar</a>
          </li>
          <li className='navbar-item'>
            <a href='#btn' className='navbar-btn'>Demo olish</a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
