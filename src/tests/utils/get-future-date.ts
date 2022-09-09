import { setYear, parseISO } from "date-fns";

 /**
  * @receives "2021-01-01" and returns "2022-01-01"
  * @param date 
  */

export function getFutureDate(date: string){
   const parsedDate = parseISO(date);
   return setYear(parsedDate, parsedDate.getFullYear() + 1).getFullYear();
}