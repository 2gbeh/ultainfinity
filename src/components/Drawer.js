import "../styles/Drawer.scss";

const data = [
  {
    active: true,
    href: "/",
    title: "Home",
    icon: "fi fi-rs-home",
    badge: 0,
  },
  {
    active: false,
    href: "/",
    title: "History",
    icon: "fi fi-rs-pulse",
    badge: 0,
  },
  {
    active: false,
    href: "/",
    title: "Invoices",
    icon: "fi fi-rs-scale",
    badge: 0,
  },
  {
    active: false,
    href: "/",
    title: "My Cards",
    icon: "fi fi-rs-credit-card",
    badge: 2,
  },
  {
    active: false,
    href: "/",
    title: "Rewards",
    icon: "fi fi-rs-trophy",
    badge: 0,
  },
  {
    href: "/",
    active: false,
    title: "Receipts",
    icon: "fi  fi-rs-receipt",
    badge: 0,
  },
];

const Drawer = () => {
  return (
    <ul className="drawer">
      {data.map((e, i) => (
        <li key={i}>
          <a href={e.href} title={e.title} className={e.active ? "active" : ""}>
            <i className={e.icon}></i>
            {e.badge > 0 ? <b>{e.badge}</b> : ""}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Drawer;
