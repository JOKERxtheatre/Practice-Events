import { Button } from "../ui/button";
import { Event } from "types/index";
// Определяем интерфейс для объекта события


export interface Props {
  events: Event[]; // Исправлен тип данных для events
  handleDel: (id: string) => void; // Исправлен тип для handleDel
}

function EventList({ events, handleDel } : Props) {
  return (
    <div data-aos="zoom-out" data-aos-duration="500">
      {events.length === 0 && (
        <div>
          <h2 className="font-semibold">Not content yet :)</h2>
        </div>
      )}
      {events.map((event, index) => {
        return (
          <div
            data-aos="zoom-out"
            data-aos-delay={`${index * 150}`}
            className="py-2 flex flex-col items-center justify-center gap-2 bg-slate-50 border px-5 my-3 rounded-lg"
            key={event.id}
          >
            <h2>{event.title}</h2>
            <div className="flex">
              <p>{event.location}</p>-<p>{event.date}</p>
            </div>
            <Button onClick={() => handleDel(event.id)} variant={"ghost"}>
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default EventList;
