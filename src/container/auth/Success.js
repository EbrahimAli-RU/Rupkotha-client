import { useSelector } from "react-redux";

const Success = (props) => {
  ////GET MESSAGE FROM REDUX
  const uiMessage = useSelector((state) => state.ui);
  ///////////RENDEING////////////////
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "5rem",
        color: "black",
        fontFamily: "Lobster, sans-serif",
      }}
    >
      <h1>{uiMessage.message1}</h1>
      <h3>{uiMessage.message}</h3>
    </div>
  );
};

export default Success;
