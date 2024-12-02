import "./App.css";
import { google, outlook, office365, ics, CalendarEvent } from "calendar-link";

function App() {
  const dataMock: CalendarEvent = {
    title: "My birthday party",
    description: "Be there!",
    start: "2024-12-29 18:00:00 -0300",
    duration: [3, "hour"],
  };

  const handleClick = (input: "google" | "outlook" | "office" | "apple") => {
    console.log("Evento =>", input);
    switch (input) {
      case "google":
        window.open(google(dataMock), "_blank");
        break;
      case "outlook":
        window.open(outlook(dataMock), "_blank");
        break;
      case "office":
        window.open(office365(dataMock), "_blank");
        break;
      case "apple":
        window.open(ics(dataMock), "_blank");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <h1>Agendar Calendario</h1>
      <div className="container-button">
        <button className="btn-calendar" onClick={() => handleClick("outlook")}>
          Outlook
        </button>
        <button className="btn-calendar" onClick={() => handleClick("google")}>
          Google
        </button>
        <button className="btn-calendar" onClick={() => handleClick("office")}>
          Office 365
        </button>
        <button className="btn-calendar" onClick={() => handleClick("apple")}>
          Apple
        </button>
      </div>
      <hr />
      <div>
        <h2>Data Input</h2>
        <div>
          <p>
            <strong>Título:</strong> {dataMock.title}
          </p>
          <p>
            <strong>Descripción:</strong> {dataMock.description}
          </p>
          <p>
            <strong>Hora de inicio:</strong> {dataMock.start}
          </p>
          <p>
            <strong>Duración:</strong> {dataMock.duration}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
