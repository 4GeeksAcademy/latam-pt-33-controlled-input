import React, { useState } from "react";
import emojiList from "../../assets/emojiList.json"


const Emoji = ({ title, symbol, keywords }) => {
	return <>
		<div className="card m-2">
			<div className="card-header">
				{title}
			</div>
			<div className="card-body">
				<blockquote className="blockquote mb-0">
				{/* <p>A well-known quote, contained in a blockquote element.</p> */}
				<footer className="blockquote-footer">{symbol} <cite title="Source Title">{keywords}</cite></footer>
				</blockquote>
			</div>
		</div>
	</>
}

//create your first component
const Home = () => {

	const [search, setSearch ] = useState("")

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Emoji Search 🔍</h1>
			<p>Emoji count: {emojiList
				.filter(
					emoji => emoji.keywords.toLowerCase()
						.includes(search.toLowerCase())
						|| emoji.title.toLowerCase()
							.includes( search.toLowerCase() )
				)
				.length}</p>

			{/* Entrada controlada */}
			<input type="text" value={search} placeholder="Search emoji"
				onChange={(event) => setSearch(event.target.value)}

				onKeyUp={(event) => {

					if(event.key == "Enter"){
						alert("Hola Luis! te toca iniciar el TODO!")
					}

				}}
			/>

			{ emojiList.
				filter(emoji => emoji.keywords.toLowerCase()
					.includes(search.toLowerCase())
					|| emoji.title.toLowerCase()
						.includes( search.toLowerCase() ))
				.map( 
					emoji => (
						<Emoji 
							title={emoji.title} 
							symbol={emoji.symbol} 
							keywords={emoji.keywords} 
						/>
					)
				)
			}
		</div>
	);
};

export default Home;
