import db from '$lib/db';

export async function post({ locals }) {
	let { user } = locals;


	await db.query(
		`
	    INSERT INTO "shift"("started_by")
        SELECT       user_id
        FROM        "user"
        WHERE       user_type = 1
        AND         user_id = $1
	    `,
		[user.user_id]
	);
	return {};
}

export async function put({ request, locals }) {
	let { shift_id } = await request.json();
	console.log(shift_id);

	await db.query(
		`
        UPDATE "shift"
        SET     is_active = false,
                ended_at = NOW()
        WHERE   shift_id = $1
    `,
		[shift_id]
	);
	return {};
}
