import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <nav>
      <div className="m-auto w-full border-b-1 border-b-slate-300">
        <div className="m-auto w-300 p-4">
          <div className="flex gap-6 font-semibold">
            <Link href="/" className="text-emerald-500">
              Trang chủ
            </Link>
            <Link href="/san-pham" className="hover:text-emerald-500">
              Sản phẩm
              <i className="fa-solid fa-chevron-down"></i>
            </Link>
            <Link href="/tin-tuc" className="hover:text-emerald-500">
              Tin tức
              <i className="fa-solid fa-chevron-down"></i>
            </Link>
            <Link href="/gioi-thieu" className="hover:text-emerald-500">
              Giới thiệu
            </Link>
            <Link href="/lien-he" className="hover:text-emerald-500">
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
