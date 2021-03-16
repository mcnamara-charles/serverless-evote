import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="jcent py-28 flex flex-col lg:flex-row items-center">
          <h3 className="footer-header">
            Copyright © 2021 - Powered by CMCN<sup className="crsymb">&trade;</sup>
          </h3>
          <div className="right flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <div className="flex lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://cmcn.tech"
              className="footer-soc"
            >
            <i className="fas fa-globe fa-lg"></i>
            </a>
            <a
              href="https://github.com/mcnamara-charles"
              className="footer-soc"
            >
            <i className="fab fa-github fa-lg"></i>
            </a>
            <a
              href="https://www.facebook.com/mcnamara.charles"
              className="footer-soc"
            >
            <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/cmcn.php/"
              className="footer-soc"
            >
            <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://twitter.com/Charles93018168"
              className="footer-soc"
            >
            <i className="fab fa-twitter fa-lg"></i>
            </a>
          </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
