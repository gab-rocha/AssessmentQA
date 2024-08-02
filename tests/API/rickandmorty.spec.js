import { test, expect } from '@playwright/test'
import { info, results } from "../../src/test-data/rickandmortyapi.json"

test.use({ baseURL: "https://rickandmortyapi.com" });

test.describe("Rick and Morty API Testing", async () => {

    test('RestAPI GET /character', async ({ request }) => {
        const response = await request.get('/api/character')

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).not.toBeNull();
        expect(responseBody).toHaveProperty('info.count', info.count);
    })

    test('RestAPI GET /character by ID', async ({ request }) => {
        //Choose a random character index
        const index = Math.floor(Math.random() * results.length)

        const response = await request.get(`/api/character/${index}`)

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).not.toBeNull();
        expect({ id: index, name: results[index - 1].name }).toMatchObject({ id: responseBody.id, name: responseBody.name });
    })

    test('GraphQL search for a character', async ({ request }) => {
        //Choose a random character name
        const name = results[(Math.floor(Math.random() * results.length)) - 1].name

        const searchCharacterQuery = `query {characters(filter: { name: "` + name + `"}) {info {count} results {name}}}`;

        const response = await request.post('/graphql', {
            data: {
                query: searchCharacterQuery
            }
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).not.toBeNull();
    });
});