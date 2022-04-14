import { Outlet } from "react-router-dom";
const Innercontainer = (props) => {
  return (
    <div className="innercontent">
      <Outlet />
    </div>
  );
};
export default Innercontainer;
