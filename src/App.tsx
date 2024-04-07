import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/title/Title";
import { Button } from "./components/ui/button";
import Modal from "./components/modal/Modal";
import EventList from "./components/EventList/EventList";
import NewEventForm from "./components/NewForms/NewEventForm";
import Aos from "aos";
import "aos/dist/aos.css";
import { Event } from "types/index";

// Указываем типизацию для объектов событий

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [events, setEvents] = useState<Event[]>([]);
  const [showContent, setShowContent] = useState(true);
  // Убираем isModeModel из состояния, так как он никогда не меняется
  const [showModal, setShowModal] = useState(false);

  const handleDel = (id: string) => {
    const filteredEvents = events.filter((event : Event) => {
      return event.id !== id;
    });
    setEvents(filteredEvents);
  };

  const newEvents = (event : Event) => {
    setEvents((prev) => {
      return [...prev, event];
    });
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App flex flex-col items-center justify-center">
      <Title Title="Xumoyun's website⚡" subtitle="Ahir bu men ku bu" />
      {showContent ? (
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
      ) : (
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
        className="mt-5 max-[426px]:px-2 max-[426px]:py-1 max-[426px]:text-xs"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Set New Event
      </Button>
      {showModal && (
        <Modal closeModal={closeModal} isModeModel={false}>
          <NewEventForm newEvents={newEvents} id={""} title={""} location={""} date={""} />
        </Modal>
      )}
    </div>
  );
}

export default App;
