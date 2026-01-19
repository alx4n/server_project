import fetch from 'node-fetch';

export const namesRoute = async (req, res) => {
    const url = 'https://www.usemodernfullstack.dev/api/v1/users';
    try {
        const response = await fetch(url);
        const json = await response.json();
        const names = json.map((name) => ({name}));
        res.send(names.join('<br>'));
    } catch (err) {
        res.status(500).send('There was an error fetching the data');
    }
};

export const helloCallback = (req, res) => {
    res.send('Hello World!');
};

