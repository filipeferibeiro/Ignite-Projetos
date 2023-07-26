import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/filipeferibeiro.png",
			name: "Filipe Fernandes",
			role: "Front-End Architect",
		},
		content: [
			{
				type: "paragraph",
				content: "Fala galeraa 👋",
			},
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{
				type: "link",
				content: "jane.design/doctorcare",
			},
		],
		publishedAt: new Date("2023-07-13 09:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/diego3g.png",
			name: "Diego Fernandes",
			role: "CTO @ Rocketseat",
		},
		content: [
			{
				type: "paragraph",
				content: "Fala pessoal 👋",
			},
			{
				type: "paragraph",
				content:
					"Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
			},
			{
				type: "paragraph",
				content: "Acesse e deixe seu feedback",
			},
			{
				type: "link",
				content: "devonlane.design",
			},
		],
		publishedAt: new Date("2023-07-10 21:35:00"),
	},
];

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => (
						<Post
							key={post.id}
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
						/>
					))}
				</main>
			</div>
		</div>
	);
}
