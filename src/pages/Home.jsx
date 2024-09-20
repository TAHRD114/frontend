import Card from "react-bootstrap/Card";
import data from "../data/project.json";

export default function Home() {
  return (
    <>
      {/* <img src="/keyVisual.png" alt="main" className="w-full h-80" /> */}
      <h3 style={{ display: "flex", marginLeft: "8%", marginTop: "50px" }}>
        OUR PROJECT
      </h3>
      <div
        style={{
          marginTop: "50px",
          marginLeft: "5%",
          gap: "20px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "90%",
        }}
      >
        {data.map((card) => (
          <Card
            key={card.id}
            style={{
              width: "25%",
              height: "350px",
              border: "none",
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
                gap: "100px",
                justifyContent: "space-between",
              }}
            >
              <Card.Text style={{ color: "#2E2E2E" }}>{card.group}</Card.Text>
              {/* <Card.Text>{card.date}</Card.Text> */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
