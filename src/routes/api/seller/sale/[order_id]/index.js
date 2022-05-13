import db from '$lib/db';

export async function get({ locals, params }) {
	let { user } = locals;
        console.log(params);
        console.log('asd');
	const { rows } = await db.query(
		`
		WITH productos AS (

            SELECT  array_agg(a) products
            FROM    order_product_v a
            WHERE   order_id = $2
            

        ), final AS 
        (
            SELECT  "a".*, 
                    COALESCE("b"."products", '{}') "products"
            FROM    "order" a,
                    "productos" "b"
            WHERE   "user_id" = $1
            AND     "order_id" = $2
        )
        SELECT  to_jsonb("a") as "order"
        FROM    "final" "a"
 
	`,
		[user.user_id, params.order_id]
	);

	return {
		body: {
			order: rows[0].order
		}
	};
}
