import "../../styles/Cards.scss";
import logo from "../../static/mscard.png";

const Wallet = () => {
  return (
    <div className="wallet">
      <i className="fi fi-rs-subtitles"></i>

      <h5>4562 1122 4595 7852</h5>
      
      <table border="0">
        <tr>
          <td>
            <div className="label">TUGBEH EMMANUEL O.</div>
            <div className="input">CARD HOLDER</div>
          </td>
          <td align="right">
            <figure>
              <img src={logo} alt="" /> 
              <figcaption>Mastercard</figcaption>
            </figure>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Wallet;
