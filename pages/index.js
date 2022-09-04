import Head from "next/head";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import Header from "../components/Header";
import DisplayNfts from "../components/DisplayNfts";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";

export default function Home() {
  const [bal, setBal] = useState(null);
  const [loading, setLoading] = useState(false);
  const { connection } = useConnection();
  const { wallet, connected, publicKey } = useWallet();
  const [nfts, setNfts] = useState(null);
  const metaplex = Metaplex.make(connection);

  const fetchAllNfts = async () => {
    try {
      setLoading(true);
      const list = await metaplex
        .nfts()
        .findAllByOwner({ owner: publicKey })
        .run();
      setNfts(list);
      console.log(list)
    } catch (error) {
      console.log("error fetching all nfts: ", error);
    }
  };

  useEffect(() => {
    if (publicKey)
      connection
        .getBalance(publicKey)
        .then((balance) => setBal(balance / LAMPORTS_PER_SOL))
        .catch((error) => alert(error));
  });

  return (
    <div>
      <Head>
        <title>Show NFTs</title>
        <meta
          name="Burn and redeem your Buddiezz Merch NFTs "
          content="BuddiezzNFT Redeem Portal"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header balance={bal} />
      {!wallet || !connected ? (
        <div className="w-full text-center text-2xl">
          <h1 className="">Welcome to the Redeem Portal</h1>
          <h4>Connect wallet to begin</h4>
        </div>
      ) : (
        <div className="grid place-content-center">
          {!nfts ? (
            <button
              className="mx-auto mb-6 px-4 py-2 rounded-lg border-4 border-blue-600"
              onClick={fetchAllNfts}
            >
              Show My NFTs
            </button>
          ) : (
            <DisplayNfts nfts={nfts} />
          )}
        </div>
      )}
    </div>
  );
}
