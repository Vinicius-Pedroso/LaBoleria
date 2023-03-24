import connectionDB from "../database.js";

export async function OrdersPostControllers(req, res) {
    const { clientId, cakeId, quantity, totalPrice } = req.body;
    const dateNow = now()

    console.log("entrou no console")
    console.log(dateNow)

    try {

        await connectionDB.query('INSERT INTO orders (clientId, cakeId, quantity, createdAt, totalPrice) VALUES ($1, $2, $3, $4, $5)',
            [clientId, cakeId, quantity, dateNow, totalPrice]
        )
        return res.sendStatus(201)

    } catch (err) {
        return res.send(err).status(500)
    }
}

export async function OrdersGetControllers(req, res) {
    const { date } = req.query.date;

    try {

        if (date) {
            const ordersByDate = connectionDB.query(`SELECT 
            clients.id AS "client.id", 
            clients.name AS "client.name", 
            clients.address AS "client.address", 
            clients.phone AS "client.phone", 
            cakes.id AS "cake.id", 
            cakes.name AS "cake.name", 
            cakes.price AS "cake.price", 
            cakes.description AS "cake.description", 
            cakes.image AS "cake.image", 
            orders.createdAt AS "createdAt", 
            orders.quantity AS "quantity", 
            orders.totalPrice AS "totalPrice"
          FROM 
            orders 
            JOIN clients ON orders.clientId = clients.id 
            JOIN cakes ON orders.cakeId = cakes.id
            WHERE createdAt = $1;
          `, [date])

            const data = ordersByDate.rows.map(row => {
                return {
                    client: {
                        id: row.client_id,
                        name: row.client_name,
                        address: row.client_address,
                        phone: row.client_phone,
                    },
                    cake: {
                        id: row.cake_id,
                        name: row.cake_name,
                        price: row.cake_price,
                        description: row.cake_description,
                        image: row.cake_image,
                    },
                    createdAt: row.createdat,
                    quantity: row.quantity,
                    totalPrice: row.totalprice,
                };
            });


            return res.send(data).Status(200)
        }

        const allOrders = connectionDB.query(`SELECT 
        clients.id as "client.id", 
        clients.name as "client.name", 
        clients.address as "client.address", 
        clients.phone as "client.phone", 
        cakes.id as "cake.id", 
        cakes.name as "cake.name", 
        cakes.price as "cake.price", 
        cakes.description as "cake.description", 
        cakes.image as "cake.image", 
        orders.createdAt as "createdAt", 
        orders.quantity as "quantity", 
        orders.totalPrice as "totalPrice"
      FROM 
        orders 
        JOIN clients ON orders.clientId = clients.id 
        JOIN cakes ON orders.cakeId = cakes.id;
      `)

        const dataAllOrders = allOrders.rows.map(row => {
            return {
                client: {
                    id: row.client_id,
                    name: row.client_name,
                    address: row.client_address,
                    phone: row.client_phone,
                },
                cake: {
                    id: row.cake_id,
                    name: row.cake_name,
                    price: row.cake_price,
                    description: row.cake_description,
                    image: row.cake_image,
                },
                createdAt: row.createdat,
                quantity: row.quantity,
                totalPrice: row.totalprice,
            };
        });


        return res.send(dataAllOrders).Status(200)

    } catch (err) {
        return res.send(err).status(500);
    }

}

export async function OrdersByIdControllers(req, res) {
    const { id } = req.params.id;

    try {

        const ordersById = connectionDB.query(`SELECT 
        clients.id as "client.id", 
        clients.name as "client.name", 
        clients.address as "client.address", 
        clients.phone as "client.phone", 
        cakes.id as "cake.id", 
        cakes.name as "cake.name", 
        cakes.price as "cake.price", 
        cakes.description as "cake.description", 
        cakes.image as "cake.image", 
        orders.createdAt as "createdAt", 
        orders.quantity as "quantity", 
        orders.totalPrice as "totalPrice"
      FROM 
        orders 
        JOIN clients ON orders.clientId = clients.id 
        JOIN cakes ON orders.cakeId = cakes.id;
      WHERE id = $1`, [id])

        const data = ordersById.rows.map(row => {
            return {
                client: {
                    id: row.client_id,
                    name: row.client_name,
                    address: row.client_address,
                    phone: row.client_phone,
                },
                cake: {
                    id: row.cake_id,
                    name: row.cake_name,
                    price: row.cake_price,
                    description: row.cake_description,
                    image: row.cake_image,
                },
                createdAt: row.createdat,
                quantity: row.quantity,
                totalPrice: row.totalprice,
            };
        });

        return res.status(404).send(data)

    } catch (err) {
        return res.status(500).send(err);
    }

}
