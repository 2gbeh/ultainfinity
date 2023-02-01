import "../styles/App.css";

import Drawer from "../components/Drawer";
import Header from "../components/Header";
import CoinCard from "../components/Cards/Coin";
import ColumnChart from "../components/Charts/Column";
import Table from "../components/Table";
import CoinWallet from "../components/Cards/Wallet";
import List from "../components/List";

const listItem1 = [
  { id: 1, name: "Basic Salary", status: "Paid", amount: 4500 },
  { id: 2, name: "Power Bill", status: "Paid", amount: 150 },
  { id: 3, name: "Water Bill", status: "Paid", amount: 120 },
  { id: 4, name: "Internet Bill", status: "Paid", amount: 60 },
];
const listItem2 = [
  { id: 1, name: "Mortgage Bill", status: "Unpaid", amount: 1500 },
  { id: 2, name: "Car Insurance", status: "Unpaid", amount: 150 },
];

function App() {
  return (
    <div className="App">
      <ul className="flex">
        <li className="flex-item" style={{width:'10%'}}>
          <Drawer />
        </li>
        <li className="flex-item" style={{width:'90%'}}>
          <div className="container">
            <Header />
            <ul className="flex-inner">
              <li className="flex-item-inner" style={{width:'75%'}}>
                <CoinCard />
                <ColumnChart caption="Total Balance" total={1500} />
                <Table />
              </li>
              <li className="flex-item-inner" style={{width:'25%'}}>
                <CoinWallet />
                <List
                  title="Recent Activities"
                  summary="15 Sep 1992"
                  data={listItem1}
                />
                <List
                  title="Upcoming Payments"
                  summary="3 Jan 2019"
                  data={listItem2}
                />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
