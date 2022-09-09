import { setYear, parseISO } from "date-fns";
/**
 * @receives "2021-01-01" and returns "2022-01-01"
 * @param date
 */
export function getFutureDate(date) {
    const parsedDate = parseISO(date);
    return setYear(parsedDate, parsedDate.getFullYear() + 1).getFullYear();
}
