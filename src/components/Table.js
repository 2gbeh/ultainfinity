import "../styles/Table.scss";

const data = [
  {
    id: 1,
    photo: 'avatar_m.png',
    transaction: "Car Insurance",
    amount: 350.0,
    status: "Completed",
    created_at: "10:42:23 AM",
  },
  {
    id: 2,
    photo: 'avatar_m.png',
    transaction: "Car Loan",
    amount: 1200.0,
    status: "Completed",
    created_at: "10:42:23 AM",
  },
  {
    id: 3,
    photo: 'avatar_f.png',
    transaction: "Online Payment",
    amount: 154.0,
    status: "Pending",
    created_at: "10:42:23 AM",
  },
];

const getBadge = (txt) => {
  let obj = {
    completed: "success",
    pending: "warning",
    failed: "danger",
  };
  return obj[txt.toLowerCase()];
};

const getPhoto = (photo) => {
  return require(`../static/${photo}`);
}

const Table = () => {
  return (
    <table border="0" className="data-table">
      <caption>
        <h3>History</h3>
        <p>Transaction of last 6 months</p>
      </caption>
      <tbody>
      {data.map((e) => (
        <tr key={e.id}>
          <td>
            <div className="avatar" style={{
              backgroundImage: `url(${getPhoto(e.photo)})`
            }}>&nbsp;</div>
          </td>
          <td>{e.transaction}</td>
          <td align="right">$ {Number(e.amount).toLocaleString()}</td>
          <td>{e.created_at}</td>
          <td>
            <div className={`badge bg-${getBadge(e.status)}`}>{e.status}</div>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;
