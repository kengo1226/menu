import { createClient } from 'contentful';

const client = createClient({
    space: "uaull9enpf4a",
    accessToken: "NbnU1ZQXVfDRW8fDkAtKSsfdAP-yR-X1JaJNt0O4AjA",
}) 

const getMushrooms = async () => {
    const mushrooms = await client.getEntries({
        content_type: 'mushroom',
        order: 'sys.createdAt',
    });

    return mushrooms.items;
};

export default getMushrooms;