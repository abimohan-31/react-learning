import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div style={style.container}>
        <h1>
          <Link to="/">Header components</Link>
        </h1>
      </div>
    </>
  );
}
const style = {
  container: {
    backgroundColor: "#1d293d",
    height: "50px",
    marginBottom: "20px",
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default Header;
