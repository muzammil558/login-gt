import Image from "next/image"
import styles from "@/styles/nft-card.module.scss"

interface NFTCardProps {
  image: string
  skinName:string
  title: string
  tokenId: string
  rarity: string
}

export default function NFTCard({ image,skinName, title, tokenId, rarity }: NFTCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={image || "/placeholder.svg"} alt={title} fill className={styles.image} />
      </div>
      <div className={styles.cardInfo}>
        <span className={styles.name}>{skinName}</span>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.details}>
          <span className={styles.tokenId}>Token id: {tokenId}</span>
          <span className={styles.rarity}>{rarity}</span>
        </div>
      </div>
    </div>
  )
}
