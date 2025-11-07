"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "../assets/Icons/Logo";
import { NavLinks } from "./utils/constant.data";
import NotificationIcon from "../assets/Icons/NotificationIcon";
import ChatIcon from "../assets/Icons/ChatIcon";
import HambugerMenu from "../assets/Icons/HambugerMenu";
import Loader from "./Loader/Loader";
import { AnimatePresence } from "framer-motion";
import AppsMenu from "./Menu/AppsMenu";
import { useGetUserQuery } from "../services/api";
import ProfileMenu from "./Menu/ProfileMenu";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Revenue");
  const [menuActive, setMenuActive] = useState(false);
  const { data, isLoading } = useGetUserQuery();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMenuActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="w-full max-w-[1406px] h-16 flex items-center justify-between px-6 bg-white rounded-full shadow">
      <div>
        <Logo className="" />
      </div>
      <div className="flex items-center justify-center gap-5 relative">
        {NavLinks.map((item, i) => (
          <span
            key={i}
            onClick={() => setActiveTab(item.name)}
            className={`${
              activeTab === item.name
                ? "bg-black text-white fill-white"
                : "bg-transparent text-[#56616B]"
            } rounded-full flex items-center justify-center gap-1 px-[18px] py-2 cursor-pointer`}
          >
            <span>
              <item.icon className={`w-5 h-5 fill-white`} />
            </span>
            <p className="text-base font-semibold">{item.name}</p>
          </span>
        ))}
        <AnimatePresence>
          {activeTab === "Apps" && <AppsMenu />}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-end gap-4 re">
        <NotificationIcon />
        <ChatIcon />
        <div
          onClick={() => setMenuActive((prev) => !prev)}
          className="flex py-1 px-[5px] bg-[#EFF1F6] h-10 w-[81px] rounded-full items-center justify-start gap-2 relative cursor-pointer"
        >
          <span className="bg-black rounded-full text-white text-sm font-semibold w-8 h-8 flex items-center justify-center">
            {isLoading ? (
              <Loader />
            ) : (
              (data?.first_name?.[0] ?? "N") + (data?.last_name?.[0] ?? "/A")
            )}
          </span>
          <HambugerMenu />
          <AnimatePresence>
            {menuActive && <ProfileMenu isLoading={isLoading} data={data} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;

