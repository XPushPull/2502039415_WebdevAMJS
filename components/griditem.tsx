import styles from "@/styles/GridStyle.module.css";
import Image from "next/image";
export default function GridItem({ itemDesc }: { itemDesc: APIItem }) {
	return (
		<div key={itemDesc.id} className={styles.OuterDiv}>
			<Image
				src={itemDesc.image}
				alt={"Product Image"}
				width={1000}
				height={1000}
				className={styles.productImage}
			/>
			<p className={styles.title}>{itemDesc.title}</p>
			<p className={styles.price}>{itemDesc.price} Coins</p>
			<p className={styles.descriptionTitle}>Description: </p>
			<p className={styles.description}>
				{itemDesc.description.length >= 80
					? itemDesc.description.substring(0, 80) + "..."
					: itemDesc.description}
			</p>
		</div>
	);
}
export interface APIItem {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}
