"use client"
import Link from "next/link";
import {usePathname, useParams, useRouter} from "next/navigation";

export function Control() {
	const params = useParams();
	const router = useRouter();
	const pathName = usePathname().replace('/', '');
	const id = params.id;

	console.log('~ file : Control.js:8 ~ Control ~ params: ', params);
	console.log('~ file : Control.js:8 ~ Control ~ pathName: ', pathName);
	return (
		<ul className="mt-3">
			{pathName !== 'create' ? <>
				<li><Link href="/create" className="inline-flex justify-center rounded-md border py-1 px-2 font-semibold tracking-tight focus:outline-none border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent">Create</Link></li>
			</> : null}
			{id ? <>
				<li><Link href={"/update/" + id} className="inline-flex justify-center rounded-md border py-1 px-2 font-semibold tracking-tight focus:outline-none border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent">Update</Link></li>
				<li><input className="inline-flex justify-center rounded-md border py-1 px-2 font-semibold tracking-tight focus:outline-none border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent" type="button" value="Delete" onClick={() => {
					const options = {method: 'DELETE'}
					fetch('http://localhost:9999/topics/' + id, options)
						.then(resp => resp.json())
						.then((result => {
							router.push('/');
							router.refresh();
					}));
				}} /></li>
			</> : null}

		</ul>
	)
}