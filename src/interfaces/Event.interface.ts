import productDataProps from "./ProductData.interface";

export default interface EventProps {
  eventId: number;
  eventTitle: string;
  eventStart: string;
  eventEnd: string;
  eventContent: string;
  eventImage: string;
}
