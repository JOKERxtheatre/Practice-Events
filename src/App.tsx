import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/title/Title";
import { Button } from "./components/ui/button";
import Modal from "./components/modal/Modal";
import EventList from "./components/EventList/EventList";
import NewEventForm from "./components/NewForms/NewEventForm";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [events, setEvents] = useState([]);
  const [showContent, setShowContent] = useState(true);
  const [isModeModel, setModeModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleDel = (id: number) => {
    const filteredEvents = events.filter((event) => {
      return event.id !== id;
    });

    setEvents(filteredEvents);
  };
  const newEvents = (event) => {
    setEvents((prev) => {
      return [...prev, event];
    });
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App flex flex-col  items-center justify-center">
      <Title Title="Xumoyun's website⚡" subtitle="Ahir bu men ku bu" />
      {showContent && (
        <Button
          data-aos="zoom-in"
          data-aos-duration="500"
          className="my-2 max-[426px]:px-2 max-[426px]:py-1 max-[426px]:text-xs"
          variant={"destructive"}
          onClick={() => {
            setShowContent(false);
          }}
        >
          Hide Content
        </Button>
      )}
      {!showContent && (
        <Button
          data-aos="zoom-in"
          data-aos-duration="500"
          className="my-2 max-[426px]:px-2 max-[426px]:py-1 max-[426px]:text-xs"
          variant={"destructive"}
          onClick={() => {
            setShowContent(true);
          }}
        >
          Show Content
        </Button>
      )}
      {showContent && <EventList events={events} handleDel={handleDel} />}
      <Button
        variant={"outline"}
        className="mt-5  max-[426px]:px-2 max-[426px]:py-1 max-[426px]:text-xs"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Set New Event
      </Button>
      {showModal && (
        <Modal closeModal={closeModal} isModeModel={isModeModel}>
          <NewEventForm newEvents={newEvents} />
        </Modal>
      )}
    </div>
  );
}

export default App;
