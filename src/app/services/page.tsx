import type { NextPage } from "next";
import { FaReact } from "react-icons/fa";
import { SiMui, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Our Services</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Logo Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon" style={{display:'flex', alignItems:'center', justifyContent:'center'}}><FaReact className="fa fa-paint-brush" /></div>
          <h4>Professional Reactjs Developer</h4>
          <p>I call myself a Professional Reactjs developer. There are many reasons for this decision: firstly, the websites I make have a lot of functionality. Secondly, all my sites are Search engine optimized, etc</p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon" style={{display:'flex', alignItems:'center', justifyContent:'center'}}><TbBrandNextjs className="fa fa-paint-brush"/></div>
          <h4>Professional Nextjs User</h4>
          <p>I use Nextjs technology very judiciously. This helps the clients&apos; sites to appear higher in the search engine.
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}
      {/* Service Item 3: WordPress */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon" style={{display:'flex', alignItems:'center', justifyContent:'center'}}><SiTypescript className="fa fa-wordpress" /></div>
          <h4>TypeScript Developer</h4>
          <p>I use TypeScript like Master. TypeScript can reduce the number of errors on your site by at least 5 times. Through this, your site will work without errors and defects.</p>
        </div>
      </div>
      {/* Service Item 3 End */}
      {/* Service Item 4: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon" style={{display:'flex', alignItems:'center', justifyContent:'center'}}><SiMui className="fa fa-code" /></div>
          <h4>MUI User</h4>
          <p>With Materialui, I can increase my speed by 10x and it gives me a boost. And it gives you quality</p>
        </div>
      </div>
      {/* Service Item 4 End */}
      {/* Service Item 5: Video Editing */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon" style={{display:'flex', alignItems:'center', justifyContent:'center'}}><SiTailwindcss className="fa fa-film" /></div>
          <h4>Professional UI builder</h4>
          <p>With Tailwindcss, your page will be very beautiful and agile. Through this, I build a web page quickly and qualitatively</p>
        </div>
      </div>
      {/* Service Item 5 End */}
      {/* Service Item 6: SEO Optimization */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-rocket" /></div>
          <h4>SEO Optimization</h4>
          <p>Boost your online visibility and drive organic traffic to your website with our SEO optimization
            services.
            Our experts employ proven strategies to improve your search engine rankings and grow your online
            presence.
          </p>
        </div>
      </div>
      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
