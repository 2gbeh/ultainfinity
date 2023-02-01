import "../../styles/Charts.scss";


const Column = ({caption, total}) => {
  return (
    <section className="column">
      <p>{caption}</p>

      <h3>$ {Number(total).toLocaleString()}</h3>
    </section>
  );
};

export default Column;
