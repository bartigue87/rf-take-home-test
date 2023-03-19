export default function NavItem(props) {
  let navItems;

  props.items
    ? (navItems = props.items.map((item) => <li key={item}>{item}</li>))
    : (navItems = null);

  return (
    <>
      <div className={`nav--item nav--item--${props.status}`}>
        <div className={`circle circle--${props.status}`}></div>
        <p>{props.title}</p>
      </div>
      {navItems && <ul>{navItems}</ul>}
    </>
  );
}
