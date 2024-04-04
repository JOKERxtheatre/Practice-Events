import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  newEvents: string;
}
function NewEventForm({ newEvents }: Props) {
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  // const [location, setLocation] = useState("fargana");
  const title = useRef();
  const date = useRef();
  const location = useRef("Xorazm");
  console.log("rendering...");
  const form = useRef();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const event = {
      title: title.current.value,
      date: date.current.value,
      id: uuidv4(),
      location: location.current.value,
    };
    newEvents(event);
    resetInput();
  };
  const resetInput = () => {
    form.current.reset();
  };
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <label className="flex flex-col my-5">
        <span>Event Title</span>
        <Input
        required
          id="name"
          type="text"
          ref={title}
          // onChange={(e) => setTitle(e.target.value)}
          // value={title}
        />
      </label>
      <label className="flex flex-col my-5">
        <span>Event Date :</span>
        <Input
        required
          id="name"
          type="date"
          ref={date}
          // onChange={(e) => setDate(e.target.value)}
          // value={date}
        />
      </label>
      <label aria-required>
        <span>Even Location:</span>
        <select
          // onChange={(e) => {
          //   setLocation(e.target.value);
          // }}
          ref={location}
        >
          <option value="Xorazm">Xorazm</option>
          <option value="Fargona">Farg'ona</option>
          <option value="Tashkent">Tashkent</option>
        </select>
      </label>

      <div className="w-full flex items-center justify-center pt-3">
        <Button variant={"destructive"}>Submit</Button>
      </div>
    </form>
  );
}

export default NewEventForm;
