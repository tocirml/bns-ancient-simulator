import '../styles/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <p className="disclaimer">
      Disclaimer: I dont own any BnS images! They are all NCsoft property.
      Please dont kill me.
    </p>
    <p className="footer_autor">Still on development. Created by: Sharizart</p>
    <div className="paypal-button">
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="BDEEYB76J46HC" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_CR/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  </footer>
);

export default Footer;
