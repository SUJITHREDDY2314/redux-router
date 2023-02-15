import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      HomePage
      <br />
      <button onClick={() => navigate("order-summary")}>Place order</button>
    </div>
  );
};

export default HomePage;
