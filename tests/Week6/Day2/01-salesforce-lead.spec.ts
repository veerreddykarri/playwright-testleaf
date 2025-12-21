//Postman API Tests for ServiceNow
import { expect, test } from '@playwright/test';

let access_token: any; //Global Variable
let instance_url: any; //Global Variable
let leadID: any; //Global Variable
let token_type: any; //Global Variable


test.describe.serial('Salesforce API Tests', () => {

    test('Generate Access Token', async ({ request }) => {

        const response = await request.post('https://login.salesforce.com/services/oauth2/token',
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "grant_type": "password",
                    "client_id": "3MVG9dAEux2v1sLsrkD8Ig2awIvVNm4qFx69Lxl0Gt8C.gNKsQG0OR2RuJT8Mf66OurAzbFsc4CPboKUCCeEL",
                    "client_secret": "B94DA027EF595297F630DE5AADCF633DA310339DFDD330FEF2F962E0EB6619D9",
                    "username": "veerreddykarri700@agentforce.com",
                    "password": "Kt903723.MeOuhWCUnABJiLq9brMepAHfJ"
                }
            })
        const responseBody = await response.json();
        console.log(responseBody);
        console.log(response.status());
        console.log(response.statusText());
        expect(response.status()).toBe(200);
        access_token = responseBody.access_token;
        instance_url = responseBody.instance_url;
        token_type = responseBody.token_type;
    });

    test('Creating Lead', async ({ request }) => {

        const response = await request.post(`${instance_url}/services/data/v65.0/sobjects/Lead/`,
            {
                headers: {
                    "Authorization": token_type + " " + access_token,
                    "Content-Type": "application/json"
                },
                data: {
                    "Salutation": "Mr.",
                    "FirstName": "Veer " + Date.now(),
                    "LastName": "Veer Playwright",
                    "Company": "Jiya Technologies Ltd"
                }
            })
        const responseBody = await response.json();
        console.log(responseBody);
        console.log(response.status());
        console.log(response.statusText());
        expect(response.status()).toBe(201);
        leadID = responseBody.id;
    });

    test('Fetch Lead', async ({ request }) => {

        const response = await request.get(`${instance_url}/services/data/v65.0/sobjects/Lead/${leadID}`,
            {
                headers: {
                    "Authorization": token_type + " " + access_token,
                    "Content-Type": "application/json"
                }
            })
        const responseBody = await response.json();
        console.log(responseBody);
        console.log(response.status());
        console.log(response.statusText());
        expect(response.status()).toBe(200);
    });
    test('Updating Lead', async ({ request }) => {

        const response = await request.patch(`${instance_url}/services/data/v65.0/sobjects/Lead/${leadID}`,
            {
                headers: {
                    "Authorization": token_type + " " + access_token,
                    "Content-Type": "application/json"
                },
                data: {
                    "LastName": "Veer Playwright Updated",
                    "Company": "Jiya Technologies Ltd"
                }
            })
        console.log(response.status());
        console.log(response.statusText());
        expect(response.status()).toBe(204);
    });
    test('Fetch Lead To Verify Update', async ({ request }) => {

        const response = await request.get(`${instance_url}/services/data/v65.0/sobjects/Lead/${leadID}`,
            {
                headers: {
                    "Authorization": token_type + " " + access_token,
                    "Content-Type": "application/json"
                }
            })
        const responseBody = await response.json();
        console.log(responseBody);
        console.log(response.status());
        console.log(response.statusText());
        expect(response.status()).toBe(200);
        expect(responseBody.LastName).toBe("Veer Playwright Updated");
    });

    test('Delete Lead', async ({ request }) => {

        const response = await request.delete(`${instance_url}/services/data/v65.0/sobjects/Lead/${leadID}`,
            {
                headers: {
                    "Authorization": token_type + " " + access_token,
                    "Content-Type": "application/json"
                }
            })
        console.log(response.status());
        console.log(response.statusText());
        expect(response.status()).toBe(204);
    });
});