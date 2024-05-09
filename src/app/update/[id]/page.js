"use client"
import {useParams, useRouter} from 'next/navigation';
import {useEffect, useState} from "react";

export default function Update() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const router = useRouter();
	const params = useParams();

	useEffect(() => {
		fetch('http://localhost:9999/topics/' + params.id)
			.then(resp => resp.json())
			.then(result => {
				console.log(result);
				setTitle(result.title);
				setBody(result.body);
			});
	}, []);

	return(
		// onSubmit 사용자와 상호작용할 때 쓰임. client
		<form className="bg-lime-300 mt-5" onSubmit={(e) => {
			e.preventDefault();

			const title = e.target.title.value;
			const body = e.target.body.value;
			const options = {
				method: 'PATCH',
				headers: {
					'Content-Type' : 'application/json'
				},
				body: JSON.stringify({title, body})
			}

			fetch('http://localhost:9999/topics/' + params.id, options)
				.then(resp => resp.json())
				.then(result => {
					console.log(result.id);
					const lastid = result.id;
					router.push(`/read/${lastid}`);
					router.refresh();
				})
		}}>
			<p>
				<input type="text" name="title" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
			</p>
			<p>
				<textarea name="body" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
			</p>
			<p>
				<input type="submit" value="update"/>
			</p>
		</form>
	)
}