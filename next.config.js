/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "arweave.net",
      "www.arweave.net",
      "raw.githubusercontent.com",
      "cryptologos.cc",
      "storage.googleapis.com",
      "ipfs.io",
      "nftstorage.link",
      "testlaunchmynft.mypinata.cloud",
      "vvdny.io",
      "bafybeibz2ysr3xihegsv24avnj7nidgrpnfl5m33ckidqfkqv4bfozxbty.ipfs.nftstorage.link",
      "bafybeihtrh6ywiehvqa3nfwtp4llpxy5viucxyljuamromxshrmsktnw3q.ipfs.dweb.link",
      "bafybeie6gl3cl7pr5yutjuhxdabxbep24qywfkkr4motkloha2kyak7gla.ipfs.dweb.link",
      "cryptocowboy.country",
      "ipfs-pin.com",
      "images.sovanadao.com",
      "bafybeidsr7rzcof7kyfxxj4x6xff7cr7ib24puvuafofv43y72grxzanea.ipfs.dweb.link",
    ],
  },
};

module.exports = nextConfig;
