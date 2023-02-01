import "../../styles/Cards.scss";

const data = [
  {
    id: 1,
    logo: "fab-btc.png",
    name: "Bitcoin BTC",
    price: 1200,
  },
  {
    id: 2,
    logo: "fab-xrp.png",
    name: "Ripple XRP",
    price: 150,
  },
  {
    id: 3,
    logo: "fab-sol.png",
    name: "Solana SOL",
    price: 1500,
  },
  {
    id: 4,
    logo: "fab-bnb.png",
    name: "Binance BNB",
    price: 1500,
  },
];

const Coin = () => {
  return (
    <section className="coin">
      <ul className="flex">
        {data.map((e) => (
          <li className="flex-item" key={e.id}>
            <a href="#!">
              <i className="fi fi-rs-menu-dots-vertical"></i>
            </a>

            <figure>
              <img src={require(`../../static/${e.logo}`)} alt="" />
              <figcaption>{e.name}</figcaption>
            </figure>

            <h5>$ {Number(e.price).toLocaleString()}</h5>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Coin;
