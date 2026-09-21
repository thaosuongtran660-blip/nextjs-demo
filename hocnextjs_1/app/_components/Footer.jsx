import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="mx-auto max-w-[1200px] divide-y divide-gray-600">

        {/* POLICY */}
        <div className="grid grid-cols-3 py-6">
          {[
            {
              img: "/imgs/footer_policy_img_1.webp",
              text: "Đặt online giao tận nhà đúng giờ",
            },
            {
              img: "/imgs/footer_policy_img_2.webp",
              text: "Đổi trả sản phẩm trong 7 ngày",
            },
            {
              img: "/imgs/footer_policy_img_3.webp",
              text: "Sản phẩm sạch tạo vườn",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-center">
              <Image src={item.img} alt="" width={35} height={35} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* MAIN */}
        <div className="grid grid-cols-4 gap-6 py-8">

          {/* LOGO + INFO */}
          <div>
            <Image
              src="/imgs/footer-logo.webp"
              alt="logo"
              width={250}
              height={100}
            />

            <div className="flex gap-3 mt-6 text-sm">
              <i className="fa-solid fa-location-dot text-xl"></i>
              <p>
                Số 70 Lữ Gia - Phường 15 - Quận 11 - TP Hồ Chí Minh
              </p>
            </div>

            <div className="text-slate-400 text-sm mt-4">
              <p>Thứ 2 - Thứ 6: 8:00-17:00</p>
              <p>Thứ 7: 8:00 - 12:00</p>
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-lg font-semibold">Hỗ trợ khách hàng</h4>

            <div className="flex mt-5 border-b border-slate-600 pb-4">
              <i className="fa-solid fa-phone text-2xl text-orange-500 mr-3"></i>
              <div>
                <Link
                  href="tel:19006750"
                  className="text-xl font-semibold hover:text-emerald-500"
                >
                  1900 6750
                </Link>
                <p className="text-slate-400 text-sm">
                  Thứ 2 - Thứ 7: 8:00 - 12:30
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex gap-2 items-center">
                <i className="fa-regular fa-envelope text-xl"></i>
                <Link
                  href="mailto:support@sapo.vn"
                  className="text-sm hover:text-emerald-500"
                >
                  support@sapo.vn
                </Link>
              </div>

              <div className="flex gap-4 text-2xl mt-2">
                <Link href="#"><i className="fa-brands fa-facebook-f hover:text-emerald-500"></i></Link>
                <Link href="#"><i className="fa-brands fa-twitter hover:text-emerald-500"></i></Link>
                <Link href="#"><i className="fa-brands fa-youtube hover:text-emerald-500"></i></Link>
                <Link href="#"><i className="fa-brands fa-instagram hover:text-emerald-500"></i></Link>
              </div>
            </div>
          </div>

          {/* CATEGORY */}
          <div>
            <h4 className="text-lg font-semibold">Danh mục</h4>
            <ul className="text-sm leading-7 mt-5 space-y-1">
              {[
                "Thịt, cá, trứng, rau",
                "Hàng đông mát",
                "Mì, miến, cháo, phở",
                "Gạo, bột, đồ khô",
                "Dầu ăn, nước chấm, gia vị",
                "Sữa các loại",
                "Đồ uống các loại",
                "Bánh kẹo các loại",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-emerald-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BLOG */}
          <div>
            <h4 className="text-lg font-semibold">Mục ẩm thực</h4>
            <ul className="text-sm leading-7 mt-5 space-y-1">
              {[
                "Công thức nấu ăn",
                "Mẹo vặt bếp núc",
                "Đặc sản vùng miền",
                "Địa điểm ăn uống",
                "Chế độ ăn uống",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-emerald-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-stone-700 py-3 text-center text-sm">
        © 2026 Wolf Food. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;