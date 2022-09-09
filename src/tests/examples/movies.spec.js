import request from "supertest";
import { describe, expect, it } from "vitest";
const API_URL = "http://localhost:8001";
describe("GET /getWorks", () => {
    it("should return 200 and check movie name is 'Batman'", () => {
        return request(API_URL)
            .get("/getWorks")
            .expect(200)
            .then(response => {
            const { name, desc, rating } = response.body;
            expect(name).toEqual("Batman");
            expect(desc).toEqual("Filme do morcego");
            expect(rating).toEqual(5);
        });
    });
    it("should return an error if it tries to make a post request", () => {
        return request(API_URL)
            .post("/getWorks")
            .expect(404)
            .then(res => {
            const { statusCode } = res;
            expect(statusCode).toEqual(404);
        });
    });
});
