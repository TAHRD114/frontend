import "./AboutPage.css";
import Card from "react-bootstrap/Card";
import data from "../data/project.json";

export default function About() {
  return (
    <div class="container">
      <div class="content">
        <h1>About Us</h1>
        <p>TAHRD 114 </p>
        <p1>
          This is your About page. This space is a great opportunity to give a
          full background on who you are, what you do and what your site has to
          offer. Your users are genuinely interested in learning more about you,
          so don’t be afraid to share personal anecdotes to create a more
          friendly quality.{" "}
        </p1>
      </div>
      <div class="title-block">
        <img
          src="https://eu-images.contentstack.com/v3/assets/blt6d90778a997de1cd/blt087ef3b5b718deb4/64f15e8cde32571871165cdb/Black_cat_Nils_Jacobi_Alamy.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          alt="project pic"
        />
      </div>
      {/* <div class="content">
        <h1>MEET THE TEAM</h1>
      </div> */}
      {/* <div
        style={{
          marginTop: "50px",
          marginLeft: "2%",
          marginRight: "2%",
          gap: "60px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "96%",
        }}
      >
        {data.map((card) => (
          <Card
            key={card.id}
            style={{
              width: "calc(50% - 30px)", // 設置每個 Card 的寬度為一行的一半，並減去間距
              height: "350px",
              border: "none",
              marginBottom: "20px", // 添加底部間距
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Card.Img
              variant="top"
              src={card.imageUrl}
              style={{ width: "250px", height: "250px" }}
            />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
            </Card.Body>
            <Card.Body
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            ></Card.Body>
            <p
              style={{
                marginTop: "40px",
              }}
            >
              {card.group}
            </p>
          </Card>
        ))}
      </div> */}
      <div
        class="content"
        style={{
          backgroundColor: "#f2f2f2",
          marginTop: "40px",
        }}
      >
        <h3>MEET THE SPONSORS</h3>
      </div>
    </div>
  );
}
