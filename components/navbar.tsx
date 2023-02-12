import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import SearchIcon from "@/public/SearchIcon";
export interface NavBarProps {
	currentPoints: number;
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
	searchDisable?: boolean;
}
export default function Navbar(props: NavBarProps) {
	const router = useRouter();
	return (
		<nav>
			<div
				className={styles.LogoDiv}
				onClick={(e) => {
					e.preventDefault();
					router.push("/");
				}}
			>
				<Image
					src={"/egg-full.png"}
					width={50}
					height={60}
					sizes="100vw"
					alt="Egg Logo"
				/>
				<h1 className={styles.MainLogo}>Storegg</h1>
			</div>
			<div className={styles.searchBar}>
				<SearchIcon width={20} height={20} />
				<input
					type="text"
					placeholder="Search Product..."
					className={styles.searchBarInput}
					value={props.search}
					onChange={(e) => {
						e.preventDefault();
						props.setSearch(e.target.value);
					}}
					disabled={props.searchDisable}
				/>
				<MdCancel
					width={20}
					height={20}
					className={styles.cancelButton}
					onClick={(e) => {
						e.preventDefault();
						props.setSearch("");
					}}
				/>
			</div>
			<div className={styles.SideProfile}>
				<div>
					<Image
						src={"/silver-coin.png"}
						width={20}
						height={20}
						alt="Current Points"
					/>
					<span>
						<p>
							{props.currentPoints} <b>Coin</b>
						</p>
					</span>
				</div>
				<CgProfile size={50} />
			</div>
		</nav>
	);
}
