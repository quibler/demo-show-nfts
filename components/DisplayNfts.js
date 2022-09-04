import { useState } from "react";
import NftThumb from "./NftThumb";

const DisplayNfts = ({ nfts }) => {
  return (
    <div className="mx-auto max-w-7xl text-center">
      <h1 className="text-4xl">Your NFTs</h1>
      {!nfts.length ? (
        <h1>You dont have any NFTs</h1>
      ) : (
        <div>
          <div className="grid place-content-center md:flex md:flex-wrap justify-center gap-10 mt-10">
            {nfts?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg w-72 text-center"
                >
                  <NftThumb uri={item.uri} name={item.name} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayNfts;
