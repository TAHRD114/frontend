import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MainNav() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "10" }}>
          <h3 style={{ marginTop: "20px", display: "flex", marginLeft: "5%" }}>
            114 TAHRD
          </h3>
          <h3 style={{ display: "flex", marginLeft: "5%" }}>
            CAPSTONE PROJECT
          </h3>
        </div>
        <div
          style={{
            flex: "2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              borderRadius: "30px",
              border: "1px solid black",
              width: "140px",
              height: "45px",
              backgroundColor: "inherit",
            }}
          >
            CONTACT US
          </button>
        </div>
      </div>
      <Navbar
        style={{
          width: "70%",
          height: "40px",
          marginLeft: "5%",
          marginTop: "50px",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        <Container>
          <Nav
            style={{
              marginLeft: "-50px",
              gap: "50px",
            }}
          >
            <Nav.Link href="/" className="Nav-text">
              Home
            </Nav.Link>
            <Nav.Link href="/blog" className="Nav-text">
              Blog
            </Nav.Link>
            <Nav.Link href="/project" className="Nav-text">
              Project
            </Nav.Link>
            <Nav.Link href="aboutUs" className="Nav-text">
              About Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
