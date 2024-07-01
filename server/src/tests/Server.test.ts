/// <reference types="vitest" />
import request from "supertest";
import app from "../server";
import { describe, it, expect } from 'vitest';


describe("GET /api/v1", () => {
    it("should respond with 200 status and message", async () => {
        const response = await request(app).get("/api/v1")
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ message: "Hello from the server!" })

    })
})