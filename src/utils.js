import { createClient } from 'contentful';

const client = createClient({
    space: "uaull9enpf4a",
    accessToken: "NbnU1ZQXVfDRW8fDkAtKSsfdAP-yR-X1JaJNt0O4AjA",
}) 

const getProducts = async () => {
    const entries = await client.getEntries({
        content_type: 'flower',
        order: 'sys.createdAt',
    });

    const mushrooms = await client.getEntries({
        content_type: 'mushroom',
        order: 'sys.createdAt',
    });

    return entries.items;
    return mushrooms.items;
};

export default getProducts;