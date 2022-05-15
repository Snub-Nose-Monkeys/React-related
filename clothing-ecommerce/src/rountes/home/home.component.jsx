import Directory from "../../components/directroy/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
