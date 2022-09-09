import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date";


test("get future date", () => {
   expect(getFutureDate("2021-01-01")).toEqual(2022);
});