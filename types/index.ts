
export interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
}
export interface NewEvent {
    newEvents: (event: Event) => void;
    id: string;
    title: string;
    location: string;
    date: string;
}

