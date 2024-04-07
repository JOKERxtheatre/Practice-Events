import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {  NewEvent } from "types/index";


function NewEventForm({ newEvents } : NewEvent) {
  const title = useRef<HTMLInputElement>(null); // Указываем тип для useRef
  const date = useRef<HTMLInputElement>(null); // Указываем тип для useRef
  const location = useRef<HTMLSelectElement>(null); // Указываем тип для useRef
  const form = useRef<HTMLFormElement>(null); // Указываем тип для useRef

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Проверяем, что все поля заполнены
    if (title.current && date.current && location.current) {
      const event: NewEvent = {
        id: uuidv4(),
        title: title.current.value,
        date: date.current.value,
        location: location.current.value,
        newEvents: function (): void {
          throw new Error("Function not implemented.");
        }
      };
      newEvents(event);
      resetInput();
    }
  };

  const resetInput = () => {
    if (form.current) {
      form.current.reset();
    }
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
        />
      </label>
      <label className="flex flex-col my-5">
        <span>Event Date :</span>
        <Input
          required
          id="name"
          type="date"
          ref={date}
        />
      </label>
      <label aria-required>
        <span>Event Location:</span>
        <select
          required
          ref={location}
        >
          <option value="Xorazm">Xorazm</option>
          <option value="Fargona">Farg'ona</option>
          <option value="Tashkent">Tashkent</option>
        </select>
      </label>

      <div className="w-full flex items-center justify-center pt-3">
        <Button variant={"destructive"} type="submit">Submit</Button> {/* Добавляем type="submit" для кнопки Submit */}
      </div>
    </form>
  );
}

export default NewEventForm;
