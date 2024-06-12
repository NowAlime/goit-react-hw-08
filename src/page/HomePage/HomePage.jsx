import TitleBar from '..//..//components/TitleBar/TitleBar';
import { FaPhoneSquareAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <TitleBar>Home</TitleBar>
      <div>
        <h1>
          <FaPhoneSquareAlt />
          Welcome to your phone book!
        </h1>
      </div>
    </>
  );
};

export default HomePage;
