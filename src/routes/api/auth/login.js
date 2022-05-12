import db from '$lib/db';
import bcryptjs from 'bcryptjs';
export async function post({ request }) {
	// Deserializo los datos que trae el formulario
	let data = await request.json();

	let { rows } = await db.query('SELECT * FROM "user" WHERE "username" = $1 OR "email" = $1', [
		data.email
	]);

	console.log(await bcryptjs.compareSync(data.password, rows[0].password));

	if (!rows.length) {
		return { status: 400, body: { status: 400, errors: ['El usuario no existe'] } };
	}
	return { body: { wea: 'wea' } };
}
