export default async function Read(props) {
	const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + 'topics/' + props.params.id, {cache: 'no-store'});
	const topic = await resp.json();
	return(
		<>
			<h2>{topic.title}</h2>
			<p>{topic.body}</p>
			<p>parameters: {props.params.id}</p>
		</>
	)
}