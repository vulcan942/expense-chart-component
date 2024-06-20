import Image from "next/image";
import logo from "../../../public/logo.svg";

const Header = ({ balance }: { balance: string }) => {
  return (
    <div className="flex flex-row justify-between xl:min-w-[500px] min-[400px]:w-[380px] p-6 rounded-2xl bg-[#ec775f] mb-4">
      <div className="flex flex-col">
        <span className="text-white">My balance</span>
        <span className="text-2xl font-semibold text-white">{balance}</span>
      </div>
      <Image src={logo} alt="logo" />
    </div>
  );
};
export default Header;
