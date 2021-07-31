import React from 'react';
import "./nexter.css";
// import {ReactComponent as Presentation} from "../../lib/asset/icons/sphere.svg";
import globe from "../../lib/asset/icons/sphere.svg";
import trophy from "../../lib/asset/icons/trophy.svg";
import map from "../../lib/asset/icons/location.svg";
import key from "../../lib/asset/icons/key.svg";
import presentation from "../../lib/asset/icons/presentation.svg";
import lock from "../../lib/asset/icons/lock.svg";
import like from "../../lib/asset/icons/heart.svg";
import expand from "../../lib/asset/icons/expand.svg";
import profile from "../../lib/asset/icons/profile-male.svg";


import bg2 from "../../lib/asset/images/story-1.jpeg";
import bg3 from "../../lib/asset/images/story-2.jpeg";
import house1 from "../../lib/asset/images/house-1.jpeg";
import house2 from "../../lib/asset/images/house-2.jpeg";
import house3 from "../../lib/asset/images/house-3.jpeg";
import house4 from "../../lib/asset/images/house-4.jpeg";
import house5 from "../../lib/asset/images/house-5.jpeg";
import house6 from "../../lib/asset/images/house-6.jpeg";
import gal1 from "../../lib/asset/images/gal-1.jpeg";
import gal2 from "../../lib/asset/images/gal-2.jpeg";
import gal3 from "../../lib/asset/images/gal-3.jpeg";
import gal4 from "../../lib/asset/images/gal-4.jpeg";
import gal5 from "../../lib/asset/images/gal-5.jpeg";
import gal6 from "../../lib/asset/images/gal-6.jpeg";
import gal7 from "../../lib/asset/images/gal-7.jpeg";
import gal8 from "../../lib/asset/images/gal-8.jpeg";
import gal9 from "../../lib/asset/images/gal-9.jpeg";
import gal10 from "../../lib/asset/images/gal-10.jpeg";
import gal11 from "../../lib/asset/images/gal-11.jpeg";
import gal12 from "../../lib/asset/images/gal-12.jpeg";
import gal13 from "../../lib/asset/images/gal-13.jpeg";
import gal14 from "../../lib/asset/images/gal-14.jpeg";
import logo from "../../lib/asset/images/logo.png";
import logobbc from "../../lib/asset/images/logo-bbc.png";
import logoforbes from "../../lib/asset/images/logo-forbes.png";
import logotechc from "../../lib/asset/images/logo-techcrunch.png";
import logobi from "../../lib/asset/images/logo-bi.png";
import realtor1 from "../../lib/asset/images/realtor-1.jpeg";
import realtor2 from "../../lib/asset/images/realtor-2.jpeg";
import realtor3 from "../../lib/asset/images/realtor-3.jpeg";



const Nexter = () => {
    return (
        
        <div className="container">
            {/* <Presentation /> */}

            <nav className="sidebar">
                <button className="nav-btn"></button>
            </nav>

            <header className="header">
                <img src={logo}    className="header_logo" alt="realtor logo" />
                <h3 className="heading-3"> Your Own Home : </h3>
                <h1 className="heading-1"> The Ultimate Personal Freedom </h1>
                <button className="btn header-btn"> View Our Properties </button>
                <div className="header_seenon-text"> Seen on </div>
                <div className="header_seenon-logos">
                    <img src={logobbc} alt="seen on logo 1" />
                    <img src={logoforbes} alt="seen on logo 2" />
                    <img src={logotechc} alt="seen on logo 3" />
                    <img src={logobi} alt="seen on logo 4" />
                </div>
            </header>

            <div className="realtors">
                <h3 className="heading-3 realtor_heading"> Top 3 Realtors </h3>
                <div className="realtors_list">
                    <img src={realtor1} alt="realtor 1" className="realtor_img" />
                    <div className="realtors_details"> 
                        <h4 className="heading-4"> Erick Feinman </h4>
                        <h5 className="realtors_sold"> 3D printing </h5>
                    </div>
                </div>
                <div className="realtors_list">
                    <img src={realtor2} alt="realtor 2" className="realtor_img" />
                    <div className="realtors_details"> 
                        <h4 className="heading-4"> Kim Brown </h4>
                        <h5 className="realtors_sold"> 3D printing </h5>
                    </div>
                </div>
                <div className="realtors_list">
                    <img src={realtor3} alt="realtor 3" className="realtor_img" />
                    <div className="realtors_details"> 
                        <h4 className="heading-4"> Toby Ramsey </h4>
                        <h5 className="realtors_sold"> 3D printing </h5>
                    </div>
                </div>
            </div>

            <section className="featured">
                <div className="feature">
                    <img src={globe} className="feature_icon" alt="picture" />
                    <h4 className="heading-4"> World's Best Luxury Homes </h4>
                    <p className="feature_text"> lorem ipsum dolor sit aset consetieur adispsizing elit. tatetur sidf distinctino nesessiataii sarrr volurputionous </p>
                 </div>
                 <div className="feature">
                    <img src={trophy} className="feature_icon" alt="picture" />
                    <h4 className="heading-4"> World's Best Luxury Homes </h4>
                    <p className="feature_text"> lorem ipsum dolor sit aset consetieur adispsizing elit. tatetur sidf distinctino nesessiataii sarrr volurputionous </p>
                 </div>
                 <div className="feature">
                    <img src={map} className="feature_icon" alt="picture" />
                    <h4 className="heading-4"> World's Best Luxury Homes </h4>
                    <p className="feature_text"> lorem ipsum dolor sit aset consetieur adispsizing elit. tatetur sidf distinctino nesessiataii sarrr volurputionous </p>
                 </div>
                 <div className="feature">
                    <img src={key} className="feature_icon" alt="picture" />
                    <h4 className="heading-4"> World's Best Luxury Homes </h4>
                    <p className="feature_text"> lorem ipsum dolor sit aset consetieur adispsizing elit. tatetur sidf distinctino nesessiataii sarrr volurputionous </p>
                 </div>
                 <div className="feature">
                    <img src={presentation} className="feature_icon" alt="picture" />
                    <h4 className="heading-4"> World's Best Luxury Homes </h4>
                    <p className="feature_text"> lorem ipsum dolor sit aset consetieur adispsizing elit. tatetur sidf distinctino nesessiataii sarrr volurputionous </p>
                 </div>
                 <div className="feature">
                    <img src={lock} className="feature_icon" alt="picture" />
                    <h4 className="heading-4"> World's Best Luxury Homes </h4>
                    <p className="feature_text"> lorem ipsum dolor sit aset consetieur adispsizing elit. tatetur sidf distinctino nesessiataii sarrr volurputionous </p>
                 </div>
           </section>

            <div className="story story_pictures">
                <img src={bg2} className="story_pictures-1"/>
                <img src={bg3}  className="story_pictures-2"/>
                
            </div>

            <div className="story story_content">
                <h3 className="heading-3 mb-sm"> Happy Customers </h3>
                <h2 className="heading-2 mb-md"> &ldquo; The best decision of our lives &rdquo; </h2>
                <p className="story_text mb-lg"> tatetur sidf distinctino nesessiataii sarrr volurputionous. lorem ipsum dolor sit aset consetieur adispsizing elit. consetieur adispsizing elit. tatetur sidf distinctino nesessiataii 
                 </p>
                 <button className="btn"> Find your own home </button>
            </div>

            <section className="homes">
                <div className="home">
                    <img src={house1} className="home_img" alt="house image" />
                    <img src={like} className="home_like" alt="like icon" />
                    
                    <h5 className="home_name" > Beautiful Family House </h5>
                    <div className="home_location" > 
                        <img src={map} className="" />
                        <p> USA </p>                     
                    </div>
                    <div className="home_rooms" > 
                        <img src={profile} />
                        <p> 5 rooms </p>                     
                    </div>
                    <div className="home_area" > 
                        <img src={expand} />
                        <p> 325 m <sup>2</sup> </p>                     
                    </div>
                    <div className="home_price" > 
                        <img src={key} />
                        <p> $1,2oo,000 </p>                     
                    </div>
                    <button className="btn home_btn"> Contact realtor </button>
                </div>
                <div className="home">
                <img src={house6} className="home_img" alt="house image" />
                    <img src={like} className="home_like" alt="like icon" />
                    
                    <h5 className="home_name" > Modern Glass Villa </h5>
                    <div className="home_location" > 
                        <img src={map} className="" />
                        <p> Canada </p>                     
                    </div>
                    <div className="home_rooms" > 
                        <img src={profile} />
                        <p> 6 rooms </p>                     
                    </div>
                    <div className="home_area" > 
                        <img src={expand} />
                        <p> 450 m <sup>2</sup> </p>                     
                    </div>
                    <div className="home_price" > 
                        <img src={key} />
                        <p> $2,5oo,000 </p>                     
                    </div>
                    <button className="btn home_btn"> Contact realtor </button>
                </div>
                <div className="home">
                <img src={house3} className="home_img" alt="house image" />
                    <img src={like} className="home_like" alt="like icon" />
                    
                    <h5 className="home_name" > Cozy Country House </h5>
                    <div className="home_location" > 
                        <img src={map} className="" />
                        <p> UK </p>                     
                    </div>
                    <div className="home_rooms" > 
                        <img src={profile} />
                        <p> 4 rooms </p>                     
                    </div>
                    <div className="home_area" > 
                        <img src={expand} />
                        <p> 250 m <sup>2</sup> </p>                     
                    </div>
                    <div className="home_price" > 
                        <img src={key} />
                        <p> $950,000 </p>                     
                    </div>
                    <button className="btn home_btn"> Contact realtor </button>
                </div>
                <div className="home">
                <img src={house4} className="home_img" alt="house image" />
                    <img src={like} className="home_like" alt="like icon" />
                    
                    <h5 className="home_name" > Large Rustical House </h5>
                    <div className="home_location" > 
                        <img src={map} className="" />
                        <p> USA </p>                     
                    </div>
                    <div className="home_rooms" > 
                        <img src={profile} />
                        <p> 5 rooms </p>                     
                    </div>
                    <div className="home_area" > 
                        <img src={expand} />
                        <p> 325 m <sup>2</sup> </p>                     
                    </div>
                    <div className="home_price" > 
                        <img src={key} />
                        <p> $1,2oo,000 </p>                     
                    </div>
                    <button className="btn home_btn"> Contact realtor </button>
                </div>
                <div className="home">
                <img src={house5} className="home_img" alt="house image" />
                    <img src={like} className="home_like" alt="like icon" />
                    
                    <h5 className="home_name" > Mystical Palace House </h5>
                    <div className="home_location" > 
                        <img src={map} className="" />
                        <p> USA </p>                     
                    </div>
                    <div className="home_rooms" > 
                        <img src={profile} />
                        <p> 5 rooms </p>                     
                    </div>
                    <div className="home_area" > 
                        <img src={expand} />
                        <p> 325 m <sup>2</sup> </p>                     
                    </div>
                    <div className="home_price" > 
                        <img src={key} />
                        <p> $1,2oo,000 </p>                     
                    </div>
                    <button className="btn home_btn"> Contact realtor </button>
                </div>
                <div className="home">
                <img src={house2} className="home_img" alt="house image" />
                    <img src={like} className="home_like" alt="like icon" />
                    
                    <h5 className="home_name" > Modern Family Apartment </h5>
                    <div className="home_location" > 
                        <img src={map} className="" />
                        <p> USA </p>                     
                    </div>
                    <div className="home_rooms" > 
                        <img src={profile} />
                        <p> 5 rooms </p>                     
                    </div>
                    <div className="home_area" > 
                        <img src={expand} />
                        <p> 325 m <sup>2</sup> </p>                     
                    </div>
                    <div className="home_price" > 
                        <img src={key} />
                        <p> $1,2oo,000 </p>                     
                    </div>
                    <button className="btn home_btn"> Contact realtor </button>
                </div>
            </section>

            <section className="gallery">
                <figure className="gallery_item gallery_item-1">
                    <img src={gal1} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-2">
                    <img src={gal2} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-3">
                    <img src={gal3} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-4">
                    <img src={gal4} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-5">
                    <img src={gal5} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-6">
                    <img src={gal6} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-7">
                    <img src={gal7} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-8">
                    <img src={gal8} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-9">
                    <img src={gal9} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-10">
                    <img src={gal10} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-11">
                    <img src={gal11} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-12">
                    <img src={gal12} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-13">
                    <img src={gal13} alt="gallery image 1" className="gallery_img" />
                </figure>
                <figure className="gallery_item gallery_item-14">
                    <img src={gal14} alt="gallery image 1" className="gallery_img" />
                </figure>                               
            </section>

            <footer className="footer">
               <ul className="nav">
                    <li className="nav_item"> <a href="#" className="nav_link"> Find Your Dream Home </a> </li>
                    <li className="nav_item"> <a href="#" className="nav_link"> Request Proposal </a> </li>
                    <li className="nav_item"> <a href="#" className="nav_link"> Download Home Planner </a> </li>
                    <li className="nav_item"> <a href="#" className="nav_link"> Contact Us </a> </li>
                    <li className="nav_item"> <a href="#" className="nav_link"> Submit Your Proposal </a> </li>
                    <li className="nav_item"> <a href="#" className="nav_link"> Come Work With Us </a> </li>
               </ul>
               <p className="copyright">
                    &copy; copyright 2021 by lord Michstery. feel free to use project for tutorials based on this project, using reactjs. this does not apply if you plan to produce your own course or tutorials based on this project.
                </p>
            </footer>

        </div>
    )
}

export default Nexter

