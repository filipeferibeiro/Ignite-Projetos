import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./Comment.module.css";
import { useState } from "react";

interface CommentProps {
	content: string;
	onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setLikeCount((state) => state + 1);
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/filipeferibeiro.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Filipe Fernandes</strong>
							<time title="12 de Julho ás 20:10h" dateTime="2023-07-12 20:10:00">
								Cerca de 1h atrás
							</time>
						</div>

						<button onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
