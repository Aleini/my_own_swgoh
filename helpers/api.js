const fetch = require('node-fetch');
async function call(url, method, body) {
    try {
        const response = await fetch(url, {
            method: method,
            body: body ? JSON.stringify(body) : null,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const buffer = await response.buffer();
        const stringed_buffer = buffer.toString('utf8');
        const jsonData = JSON.parse(stringed_buffer);

        return jsonData;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    call
}