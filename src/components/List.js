import "../styles/List.scss";


const List = ({title, summary, data}) => {
  return (
    <table border="0" className="data-list">
      <caption>
        <h3>{title}</h3>
        <p>{summary}</p>
      </caption>
      <tbody>
      {data.map((e) => (
        <tr key={e.id}>
          <td>
            <div className="dp">
              <i>{e.name[0]}</i>
            </div>
          </td>
          <td>
            {e.name}
            <div className="status">{e.status}</div>
          </td>
          <td align="right">
            <b>$ {Number(e.amount).toLocaleString()}</b>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default List;
