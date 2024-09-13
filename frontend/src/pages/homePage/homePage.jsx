import { useContext } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';
import { AuthContext } from '../../context/AuthContext';

function HomePage() {

  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
    return (
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula
              accumsan vivamus convallis inceptos fringilla phasellus vitae at
              malesuada. Aptent sit cubilia maximus viverra eros luctus. Augue
              hendrerit pulvinar in eleifend montes.
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/pngwing.com (4).png" alt="buildings" />
        </div>
      </div>
    );
}

export default HomePage