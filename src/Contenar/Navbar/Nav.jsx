import './Nav.css'
const Nav = () => {
   
    return (
        <div className='navbar1' >
      <nav className="navbar  text-primary navbar-expand-lg  marjin1">
  <div className="container-fluid d-flex justify-content-around">
  
      <h1 className="navbar-brand marjin " href="#"><span className='text-light'>Tech</span><span className='textColor'>Wave</span></h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse   navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto ">
        <li className="nav-item">
          <a className="nav-link active text-light " aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Episodes</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link text-light" >Host</a>
        </li>
      </ul>
    
    </div>
        <button className="btn btn-outline-success rounded-5 Linear  " type="submit">Subscribe</button>
  </div>
</nav>
        </div>
    );
};

export default Nav;