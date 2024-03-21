import type { NextPage } from "next";
import { SiNetlify } from "react-icons/si";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="nextjs">
                NextJs
              </button>
              <button type="button" data-filter="reactjs">
                ReactJs
              </button>
              <button type="button" data-filter="vuejs">
                VueJs
              </button>
              <button type="button" data-filter="typscript">
                TypeScript
              </button>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/1.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Ecommore website build with Nextjs v14.1</h4>
                  <div className="icon"style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <a href="https://meeroj-paragraph.netlify.app" target="_blank"><SiNetlify className="fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/2.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Supermiya website build with Reactjs v18.0</h4>
                  <div className="icon"style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <a href="https://meeroj-supermiya.netlify.app" target="_blank"><SiNetlify className="fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/3.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Netflix clone site build with Nextjs v14.1</h4>
                  <div className="icon"style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <a href="https://shiny-cendol-49daff.netlify.app" target="_blank"><SiNetlify className="fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/4.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>My Library website build with ReactJs v18.0</h4>
                  <div className="icon"style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <a href="https://meeroj-library.netlify.app" target="_blank"><SiNetlify className="fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
