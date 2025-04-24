/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/nft-collection.module.scss";
import NFTCard from "./nft-card";
import { Layers } from 'lucide-react';

// Sample data for the NFT cards
const nftData = [
  {
    id: 1,
    image: "/skins/skin-1.png",
    skinName: "Sea Elf skin",
    title: "Mystic Breeze #87",
    tokenId: "87",
    rarity: "T5 LEGENDARY",
  },
  {
    id: 2,
    image: "/skins/skin-2.png",
    skinName: "Sea Elf skin",
    title: "Mystic Breeze #87",
    tokenId: "87",
    rarity: "T5 LEGENDARY",
  },
  {
    id: 3,
    image: "/skins/skin-3.png",
    skinName: "Sea Elf skin",
    title: "Mystic Breeze #87",
    tokenId: "87",
    rarity: "T5 LEGENDARY",
  },
  {
    id: 4,
    image: "/skins/skin-4.png",
    skinName: "Sea Elf skin",
    title: "Mystic Breeze #87",
    tokenId: "87",
    rarity: "T5 LEGENDARY",
  },
  {
    id: 5,
    image: "/skins/skin-5.png",
    skinName: "Sea Elf skin",
    title: "Mystic Breeze #87",
    tokenId: "87",
    rarity: "T5 LEGENDARY",
  },
  {
    id: 6,
    image: "/skins/skin-6.png",
    skinName: "Sea Elf skin",
    title: "Mystic Breeze #87",
    tokenId: "87",
    rarity: "T5 LEGENDARY",
  },
];

// Sample data for the filter tabs

const filterTabs = [
  { id: 1, name: "All", image: "/tabs/All.png", active: true },
  { id: 2, name: "Tab 1", image: "/tabs/tab1.png", active: false },
  { id: 3, name: "Tab 2", image: "/tabs/tab2.png", active: false },
  { id: 4, name: "Tab 3", image: "/tabs/tab3.png", active: false },
  { id: 5, name: "Tab 4", image: "/tabs/tab4.png", active: false },
];

export default function NFTCollection() {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const handleConnectWallet = () => {
    // This would come from your API in a real implementation
    const address = "0x0c62413E740C1A9Bc72B74FC41EFAA600B59009e";
    setWalletAddress(address);
    setIsLoggedIn(true);
  };

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setWalletAddress("");
  };

  const truncateAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 17)}...${address.slice(-4)}`;
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.filterBar}>
            {filterTabs.map((tab) => (
              <div
                key={tab.id}
                className={`${styles.filterTab} ${
                  activeTab === tab.id ? styles.active : ""
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                <img
                  src={tab.image || "/placeholder.svg"}
                  alt={tab.name}
                  className={styles.tabImage}
                />
              </div>
            ))}
          </div>
          <div className={styles.amountContainer}>
            <Layers className={styles.skullIcon} />
            <span className={styles.amountLabel}>Amount: {nftData.length}</span>
          </div>
        </div>

        {isLoggedIn ? (
          <div className={styles.nftGrid}>
            {nftData.map((nft) => (
              <NFTCard
                key={nft.id}
                image={nft.image}
                skinName={nft.skinName}
                title={nft.title}
                tokenId={nft.tokenId}
                rarity={nft.rarity}
              />
            ))}
          </div>
        ) : (
          <div className={styles.connectContainer}>
            <div className={styles.connectPrompt}>
              <h2 className={styles.connectTitle}>
                PLEASE CONNECT YOUR WALLET
              </h2>
              <button
                className={styles.connectWalletBtn}
                onClick={handleConnectWallet}
              >
                CONNECT WALLET
              </button>
            </div>
 
          </div>
        )}
      </div>

      <div className={styles.sidebar}>
        <div className={styles.wallet}>
          <div className={styles.userInfo}>
            <div className={styles.userProfile}>
              <Image
                src="/logo/skull-logo.png"
                alt="User avatar"
                width={50}
                height={50}
                className={styles.avatar}
              />
              <div className={styles.userDetails}>
                <span className={styles.username}>Keshamniyzev</span>
                {isLoggedIn && walletAddress && (
                  <span className={styles.walletAddress}>
                    {truncateAddress(walletAddress)}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            {isLoggedIn ? (
              <>
                <button className={styles.connectButton} disabled>
                  CONNECTED
                </button>
                <button
                  className={styles.connectButton}
                  onClick={handleConnectWallet}
                >
                  CHANGE WALLET
                </button>
                <button className={styles.logoutButton} onClick={handleLogout}>
                  LOG OUT
                </button>
              </>
            ) : (
              <>
                <button
                  className={styles.connectButton}
                  onClick={handleConnectWallet}
                >
                  CONNECT WALLET
                </button>
                <button className={styles.logoutButton} onClick={handleLogout}>
                  LOG OUT
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
