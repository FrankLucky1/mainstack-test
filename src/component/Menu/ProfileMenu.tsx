import { motion } from "framer-motion";
import Loader from "../Loader/Loader";

type Props = {
  data?: {
    first_name?: string;
    last_name?: string;
    email?: string;
  };
  isLoading: boolean;
};
const ProfileMenu = ({ data, isLoading }: Props) => {
  return (
    <motion.div
      className="absolute cursor-pointer top-full right-0 min-w-[400px] flex flex-col gap-8 mt-5 h-auto py-5 px-6 bg-white text-black shadow rounded-[20px] p-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3">
        <span className="bg-black rounded-full text-white text-base font-semibold w-10 h-10 flex items-center justify-center">
          {isLoading ? (
            <Loader />
          ) : (
            (data?.first_name?.[0] ?? "N") + (data?.last_name?.[0] ?? "/A")
          )}
        </span>
        <div className="flex flex-col">
          <h2 className="font-bold text-[24px] text-black">
            {data?.first_name} {data?.last_name}
          </h2>
          <p className="text-[#56616B] text-base">{data?.email}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileMenu;

