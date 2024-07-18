import { http, HttpResponse } from 'msw';

export const handlers: any = [
    http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.json([
            {
                id: 1,
                name: 'Arza',
            },
            {
                id: 2,
                name: 'Zaarza',
            },
        ]);
    }),
];
