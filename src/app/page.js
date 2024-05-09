import Image from "next/image";

export default function Home() {
  return (
    <>
		<h2>Welcome</h2>
		<p><span className="inline-block align-top">Hello, WEB! </span><img className="inline-block align-top" src="/hand.png" alt="파일이미지" style={{width: 30 + 'px'}}></img></p>

	</>
  );
}
