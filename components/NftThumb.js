import Image from "next/image";
import { useState } from "react";
import fetchNftMeta from "../utils/fetchNftMeta";

function NftThumb({ uri, width = "" }) {
  const { data, error } = fetchNftMeta(uri);

  const { name, image } = data ?? {};

  return (
    <div className={`${width}`}>
      <Image
        className="rounded-lg"
        src={image}
        layout="responsive"
        width="100px"
        height="100px"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
      />
      <div className=" text-center mt-2">{error ? "NFT data not found" : name}</div>
    </div>
  );
}

export default NftThumb;
