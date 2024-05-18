import Card from "react-bootstrap/Card";

const cardProject = [
  {
    id: 1,
    title: "科技應用之數位教材",
    img: "/UFO.png",
    group: "第一組",
    date: "Mar 11, 2024",
  },
  {
    id: 2,
    title: "科技應用之數位教材",
    img: "/UFO.png",
    group: "第一組",
    date: "Mar 11, 2024",
  },
  {
    id: 3,
    title: "科技應用之數位教材",
    img: "/UFO.png",
    group: "第一組",
    date: "Mar 11, 2024",
  },
  {
    id: 4,
    title: "科技應用之數位教材",
    img: "/UFO.png",
    group: "第一組",
    date: "Mar 11, 2024",
  },
  {
    id: 5,
    title: "科技應用之數位教材",
    img: "/UFO.png",
    group: "第一組",
    date: "Mar 11, 2024",
  },
  {
    id: 6,
    title: "科技應用之數位教材",
    img: "/UFO.png",
    group: "第一組",
    date: "Mar 11, 2024",
  },
  {
    id: 7,
    title: "科技應用之數位教材",
    img: "/UFO.png",
    group: "第一組",
    date: "Mar 11, 2024",
  },
  {
    id: 8,
    title: "科技應用之數位教材",
    img: "/UFO.png",
    group: "第一組",
    date: "Mar 11, 2024",
  },
  {
    id: 9,
    title: "科技應用之數位教材",
    img: "/UFO.png",
    group: "第一組",
    date: "Mar 11, 2024",
  },
  {
    id: 10,
    title: "科技應用之數位教材",
    img: "/UFO.png",
    group: "第一組",
    date: "Mar 11, 2024",
  },
];

export default function Home() {
  return (
    <>
      <h1
        style={{
          display: "flex",
          marginTop: "20px",
          marginLeft: "5%",
          marginBottom: "20px",
        }}
      >
        桃花源記
      </h1>
      <img
        src="/main.png"
        alt="main"
        style={{ width: "100%", height: "350px" }}
      />
      <hr
        style={{
          width: "90%",
          marginLeft: "5%",
          borderTop: "dotted 1px",
          marginTop: "50px",
        }}
      />
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
        {cardProject.map((card) => (
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
              src={card.img}
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
              <Card.Text>{card.date}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
