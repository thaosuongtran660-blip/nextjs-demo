import React from "react";
import "../globals.css";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="m-auto w-full border-b-1 border-b-slate-300">
        <div className="m-auto w-300 h-[40px] flex p-2 justify-between">
          <ul className="flex divide-x-1 divide-slate-300 gap-2">
            <li className="hover:text-emerald-500 pr-2">
              <a href="">Tìm cửa hàng</a>
            </li>
            <li className="hover:text-emerald-500">
              <a href="">Hỗ trợ mua hàng</a>
            </li>
          </ul>
          <ul className="flex divide-x-1 divide-slate-300 gap-2">
            <li className="hover:text-emerald-500 pr-2">
              <a href="">Sản phẩm đã xem</a>
            </li>
            <li className="hover:text-emerald-500">
              <a href="">Yêu thích 0</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="m-auto w-full">
        <div className="m-auto w-300 mt-5 flex gap-5">
          <Image src="/imgs/logo.webp" alt="logo" width={250} height={20} />

          <div>
            <form>
              <input
                type="text"
                className="w-[500px] border p-3 rounded-lg focus:outline-none focus:border-emerald-500"
                name="search"
                placeholder="Bạn cần tìm gì?"
              />
            </form>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-2">
              <div className="text-3xl">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="text-sm">
                <p>Hotline</p>
                <ul>
                  <li className="hover:text-emerald-500 font-bold">
                    <a href="">1900 6750</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-3xl">
                <i className="fa-regular fa-user"></i>
              </div>
              <ul>
                <li className="hover:text-emerald-500 font-semibold text-sm mt-2">
                  <a href="">Tài khoản</a>
                </li>
              </ul>
            </div>

            <div className="flex gap-2">
              <div className="text-3xl">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <ul>
                <li className="hover:text-emerald-500 font-semibold text-sm mt-2">
                  <a href="">Giỏ hàng</a>
                </li>
              </ul>
              <div className="bg-yellow-500 h-5 w-5 text-center text-sm rounded-xl relative right-3 bottom-2">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
