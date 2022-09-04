import logo from "/public/BUDDIEZZ.png";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Header = ({ balance }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full mb-20 md:mb-24">
      <div className="w-48 mx-auto md:mx-0">
        <Image src={logo} />
      </div>
      <div className="w-max mx-auto md:mr-0 md:ml-auto">
        <WalletMultiButton />
        {balance === null ? null : (
          <div className="inline-flex align-top min-w-[3rem] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            <Image
              src="https://cryptologos.cc/logos/solana-sol-logo.png?v=023"
              width={24}
              height={24}
              className="inline-block align-bottom"
            />
            <span className="ml-1 inline-block align-middle max-w-[70px] md:max-w-xs overflow-clip text-xl">
              {balance}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
