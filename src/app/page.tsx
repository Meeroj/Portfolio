export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img src="/imgs/logo.jpg" alt="meeroj portfolio" className="shadow-dark" />
            <h1>Merojiddin Sirojiddinov</h1>
            <p>Frontend Developer</p>
            <div className="social-links">
              <a href="https://twitter.com/Merojiddinxon" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://facebook.com/meroj.sirojiddinov" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/Meeroj" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/merojiddinsirojiddinov" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/in/me-rojiddin-sirojiddinov-7234202b2" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://t.me/merojiddinsirojiddinov" target="_blank">
                <i className="fa fa-telegram" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}