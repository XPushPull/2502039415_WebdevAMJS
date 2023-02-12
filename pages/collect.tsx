import Image from "next/image";
import styles from "@/styles/Collect.module.css";
import { useState, useEffect } from "react";
import NavBar from "@/components/navbar";

export default function Home() {
	const [currentPoints, setCurrentPoint] = useState(0);
	const [search, setSearch] = useState("");
	const [hasClaimed, setClaim] = useState({
		type: "",
		points: 0,
	});

	const coinsize = 80;
	const randomFunc = () => {
		const random = Math.floor(Math.random() * 2);
		const win = [
			{
				type: "Gold",
				points: 100,
			},
			{
				type: "Silver",
				points: 50,
			},
			{
				type: "Bronze",
				points: 20,
			},
		][random];
		setClaim(win);
		setCurrentPoint(win.points + currentPoints);
		window.localStorage.setItem(
			"points",
			(win.points + currentPoints).toString()
		);
	};
	useEffect(() => {
		const localStorageItem = window.localStorage.getItem("points");
		if (localStorageItem !== null) {
			setCurrentPoint(parseInt(localStorageItem, 10));
		}
	}, []);
	return (
		<main>
			<NavBar
				currentPoints={currentPoints}
				search={search}
				setSearch={setSearch}
				searchDisable={true}
			/>
			<p className={styles.mainTitle}>Collect Coins</p>
			<div className={styles.coins}>
				<div className={styles.individualcoin}>
					<Image
						src={"/gold-coin.png"}
						width={coinsize}
						height={coinsize}
						alt={"Gold Coin"}
					/>
					<h4>Gold Coin</h4>
				</div>
				<div className={styles.individualcoin}>
					<Image
						src={"/silver-coin.png"}
						width={coinsize}
						height={coinsize}
						alt={"Silver Coin"}
					/>
					<h4>Silver Coin</h4>
				</div>
				<div className={styles.individualcoin}>
					<Image
						src={"/bronze-coin.png"}
						width={coinsize}
						height={coinsize}
						alt={"Bronze Coin"}
					/>
					<h4>Bronze Coin</h4>
				</div>
			</div>
			{hasClaimed.points === 0 && (
				<h4
					style={{
						margin: 30,
						fontSize: 25,
					}}
				>
					Click on the egg to collect coins!!!
				</h4>
			)}
			{hasClaimed.points === 0 && (
				<div className={styles.mainEgg} onClick={randomFunc}></div>
			)}
			{hasClaimed.points !== 0 && (
				<div className={styles.claimedEgg}>
					<h4>CONGRATULATIONS!!!</h4>
					<h4
						style={{
							marginBottom: 50,
						}}
					>
						You Got A {hasClaimed.type} Coin!!!
					</h4>
					{hasClaimed.type === "Gold" ? (
						<Image
							src={"/gold-coin.png"}
							width={coinsize}
							height={coinsize}
							alt={"Gold Coin"}
						/>
					) : hasClaimed.type === "Silver" ? (
						<Image
							src={"/silver-coin.png"}
							width={coinsize}
							height={coinsize}
							alt={"Silver Coin"}
						/>
					) : (
						<Image
							src={"/bronze-coin.png"}
							width={coinsize}
							height={coinsize}
							alt={"Bronze Coin"}
						/>
					)}
				</div>
			)}
		</main>
	);
}
