import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import NavBar from "@/components/navbar";

import ListViewIcon from "@/public/ListViewIcon";
import GridViewIcon from "@/public/GridViewIcon";

import { APIItem } from "@/components/griditem";

import GridItem from "@/components/griditem";
import ListItem from "@/components/listitem";

import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	const [currentPoints, setCurrentPoint] = useState(0);
	const [isGrid, setIsGrid] = useState(true);
	const [items, setCurrentItems] = useState([]);
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const setDisplayMethod = () => {
		isGrid ? setIsGrid(false) : setIsGrid(true);
	};
	useEffect(() => {
		const localStorageItem = window.localStorage.getItem("points");
		if (localStorageItem !== null) {
			setCurrentPoint(parseInt(localStorageItem, 10));
		}
		setIsLoading(true);
		fetch("https://fakestoreapi.com/products").then((response) => {
			response.json().then((jsonresponse) => {
				setCurrentItems(jsonresponse);
				setIsLoading(false);
			});
		});
	}, []);
	return (
		<main>
			<div
				className={styles.eggButton}
				onClick={(e) => {
					e.preventDefault();
					router.push("/collect");
				}}
			>
				<Image
					src={"/egg-full.png"}
					width={60}
					height={60}
					alt={"Egg Button"}
				/>
			</div>
			<NavBar
				currentPoints={currentPoints}
				search={search}
				setSearch={setSearch}
			/>
			<div className={styles.ProductBar}>
				<button>My Product</button>
			</div>
			<div className={styles.BreadCrumb}>
				<p>Home &gt; Product List</p>
				{isGrid ? (
					<GridViewIcon onClick={setDisplayMethod} />
				) : (
					<ListViewIcon onClick={setDisplayMethod} />
				)}
			</div>
			<div className={styles.itemsgrid}>
				{isLoading && (
					<div className={styles.ldsRing}>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				)}
				{items.filter((item: APIItem) => {
					const regexString = new RegExp(`${search.toUpperCase()}`);
					return regexString.test(item.title.toUpperCase());
				}).length < 1 && !isLoading ? (
					<h1>No Items Available</h1>
				) : (
					items
						.filter((item: APIItem) => {
							const regexString = new RegExp(`${search.toUpperCase()}`);
							return regexString.test(item.title.toUpperCase());
						})
						.map((item: APIItem) => {
							if (isGrid) return <GridItem key={item.id} itemDesc={item} />;
							return <ListItem key={item.id} itemDesc={item} />;
						})
				)}
			</div>
		</main>
	);
}
