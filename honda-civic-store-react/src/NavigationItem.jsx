import { Link } from "react-router-dom";

const NavigationItem = ({ link, title }) => {
  return (
    <li className={"navlink"}>
      <Link to={link}>{title}</Link>
    </li>
  );
};

export default NavigationItem;
