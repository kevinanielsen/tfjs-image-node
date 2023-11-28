function App() {
	return (
		<>
			<header className="flex flex-col items-center p-8">
				<h1 className="text-3xl">TFJS Image Node Playground</h1>
				<h2 className="text-xl">
					tfjs-image-node, a simple npm package for dealing with Tensorflow models in node.js
				</h2>
			</header>
			<main className="flex flex-col items-center p-8">
				<div>
					<p>
						The tfjs-image-node package can be found on{" "}
						<a
							href="https://github.com/kevinanielsen/tfjs-image-node"
							className="underline text-sky-300"
						>
							GitHub
						</a>{" "}
						and{" "}
						<a
							href="https://www.npmjs.com/package/tfjs-image-node"
							className="underline text-sky-300"
						>
							NPM
						</a>
					</p>
				</div>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
