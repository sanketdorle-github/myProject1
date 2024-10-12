import DropDown from './DropDown';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './css/nav.css';
export default function Nav({ setMobileToggle }) {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <nav className="navbar">
      <ul className="cs_nav_list fw-medium">
        <li>
          <Link to="/">Home</Link>
        
        </li>
        <li className="menu-item-has-children">
          <Link to="#">Company</Link>
          <DropDown>
            <ul>
              <li>
                <Link to="/about" onClick={() => setMobileToggle(false)}>
                  About Us
                </Link>
              </li>
              <li>
                
                <Link to="/team" onClick={() => setMobileToggle(false)}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/team/team-details" onClick={() => setMobileToggle(false)}>
                  Team Details
                </Link>
              </li>
              <li>
                <Link to="/testimonial" onClick={() => setMobileToggle(false)}>
                  Testimonial
                </Link>
              </li>
              <li>
                <Link to="/project" onClick={() => setMobileToggle(false)}>
                  Project
                </Link>
              </li>
              <li>
                <Link to="/project/project-details" onClick={() => setMobileToggle(false)}>
                  Project Details
                </Link>
              </li>
              <li>
                <Link to="/pricing" onClick={() => setMobileToggle(false)}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={() => setMobileToggle(false)}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMobileToggle(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </DropDown>
        </li>
    
        <li>
          <Link to="/service" onClick={() => setMobileToggle(false)}>
            Services
          </Link>
   
        </li>
        <li className="menu-item-has-children">
          <Link to="/blog" onClick={() => setMobileToggle(false)}>
            Tenders Table
          </Link>
          <DropDown>
            <ul>
              <li>
                <Link to="/blog" onClick={() => setMobileToggle(false)}>
                  Tenders Table
                </Link>
              </li>
              <li>
                <Link to="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                  Tender by Organisation Name
                </Link>
              </li>
              <li>
                <Link to="/blog/blog-details" onClick={() => setMobileToggle(false)}>
                 Tenders Details
                </Link>
              </li>
            </ul>
          </DropDown>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMobileToggle(false)}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Search Bar with Categories */}
      <div className="search-bar">
    <input type="text" placeholder="Search Tenders..." className="search-input" />
    <div className="categories-dropdown" onClick={toggleCategories}>
        Categories
        {showCategories && (
            <DropDown>
                <ul>
                    <li><Link to="/category/construction">Construction</Link></li>
                    <li><Link to="/category/technology">Technology</Link></li>
                    <li><Link to="/category/healthcare">Healthcare</Link></li>
                    <li><Link to="/category/education">Education</Link></li>
                    <li><Link to="/category/transportation">Transportation</Link></li>
                </ul>
            </DropDown>
        )}
    </div>
    <button type="submit" className="search-button">Search</button>
</div>

     
  
    </nav>
  );
}
