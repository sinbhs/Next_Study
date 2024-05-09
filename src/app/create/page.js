"use client"
import { useRouter } from 'next/navigation';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function Create() {
	const router = useRouter();

	return(
		// onSubmit 사용자와 상호작용할 때 쓰임. client
		<form onSubmit={(e) => {
			e.preventDefault();

			const title = e.target.title.value;
			const body = e.target.body.value;
			const options = {
				method: 'POST',
				headers: {
					'Content-Type' : 'application/json'
				},
				body: JSON.stringify({title, body})
			}

			fetch(process.env.NEXT_PUBLIC_API_URL+`topics`, options)
				.then(resp => resp.json())
				.then(result => {
					console.log(result.id);
					const lastid = result.id;
					router.push(`/read/${lastid}`);
					router.refresh();
				})
		}}>
			<p>
				<input type="text" name="title" placeholder="title"/>
			</p>
			<p>
				<textarea name="body" placeholder="body"></textarea>
			</p>
			<p>
				<input type="submit" value="create" className="inline-flex justify-center rounded-md border py-1 px-2 text-base font-semibold tracking-tight focus:outline-none border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent"/>
			</p>
		</form>
	)
}