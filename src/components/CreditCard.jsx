import imgVisa from "../assets/images/visa.png";
import imgMasterCard from "../assets/images/master-card.svg";


function CreditCard(props) {
    let imgCard = "";
    let stringExpMonth = "0";
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    if (type === "Visa") {
      imgCard =imgVisa;
    } else if (type === "Master Card") {
      imgCard = imgMasterCard;

    }

    const styleCard = {
      backgroundColor: bgColor,
      color: color
    }


    const digitos = number.substring(12,16);

    if (expirationMonth < 10) {
      stringExpMonth += expirationMonth;
    } else {
      stringExpMonth = expirationMonth;
    }

    let stringExpYear = expirationYear.toString().substring(2,4);

    console.log(type, number, expirationMonth, expirationYear, bank, owner, bgColor, color);



  return (
      <div id="card" style={styleCard}>
        <div className="tipo">
          <img src={imgCard} alt="img" width={50}/>
        </div>

        <div className="numero">
          <h2> •••• •••• •••• {digitos} </h2>
        </div>

        <div className="expira">
          <span id="monthYear"> Expires {stringExpMonth}/{stringExpYear}</span> <span> {bank} </span>
        </div>

        <div className="propietario">
          {owner}
        </div>
      </div>

  )
}

export default CreditCard