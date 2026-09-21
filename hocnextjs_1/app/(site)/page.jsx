import Link from "next/link";
import "../globals.css";
import Image from "next/image";

const categories = [
  {
    title: "Rau, củ, trái cây",
    bg: "/imgs/rau_qua.webp",
    items: [
      "Rau xanh, Rau tươi",
      "Củ, quả, măng tươi",
      "Hành, tỏi, ớt, rau thơm",
      "Nấm các loại",
      "Combo rau củ quả",
    ],
  },
  {
    title: "Sữa các loại",
    bg: "/imgs/sua.webp",
    items: [
      "Sữa tươi",
      "Sữa chua uống liền",
      "Sữa hạt, Sữa đậu",
      "Sữa cacao, Lúa mạch",
      "Sữa chua ăn",
    ],
  },
  {
    title: "Thực phẩm chế biến",
    bg: "/imgs/gia_vi.webp",
    items: [
      "Thịt xông khói",
      "Khoai tây chiên",
      "Mì ăn liền",
      "Bơ thực vật",
      "Thực phẩm đóng hộp",
    ],
  },

  {
    title: "Đồ uống các loại",
    bg: "/imgs/do_uong.webp",
    items: [
      "Bia, nước có cồn",
      "Rượu các loại",
      "Nước ngọt",
      "Nước tăng lực, bù khoáng",
      "Nước trái cây, nước trà",
    ],
  },
];

const brands = [
  "vinamilk.webp",
  "thtruemilk.webp",
  "nestle.webp",
  "walls.webp",
  "cornetto.webp",
  "merino.webp",
  "celano.webp",
  "haohao.webp",
  "gaudo.webp",
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[1200px]">
      <div>
        {/* Banner */}
        <div className="my-6">
          <Image
            src="/imgs/slider_1.webp"
            alt="banner"
            width={1200}
            height={400}
            className="rounded-2xl"
            priority
          />
        </div>

        {/* CATEGORY */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-cover bg-center h-[300px] rounded-xl p-6"
              style={{ backgroundImage: `url(${cat.bg})` }}
            >
              <h3 className="font-bold text-xl">{cat.title}</h3>

              <div className="mt-4">
                {cat.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="block p-1 hover:text-emerald-500"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <Link
                href="#"
                className="inline-flex mt-4 h-[35px] w-[130px] items-center justify-center rounded-3xl bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600"
              >
                Mua sắm ngay
              </Link>
            </div>
          ))}
        </div>

        <div className="mb-15">
          <div className="bg-red-500 p-2 rounded-t-xl text-white">
            <ul>
              <li className="font-semibold text-2xl hover:text-yellow-300">
                Săn Sale đón lễ
              </li>
            </ul>
            <p>Hàng ngàn sản phẩm giảm giá diễn ra từ ngày 30/4 đến 30/6</p>
          </div>
          {/* <!-- === END TIEU DE ===== --> */}

          <div className="bg-red-400 grid grid-cols-5 gap-3 p-3 rounded-b-xl">
            {/* <!-- ===== 1 ===== --> */}
            <div className="bg-white p-3 rounded-xl">
              <div>
                <img
                  className="mt-7"
                  src="/imgs/hop-30-trung-cut-tuoi.webp"
                  alt=""
                />
              </div>

              <div>
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Sản phẩm mới</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[50px] mt-2">
                    <a href="">Hộp 30 trứng cút tươi V.Farm</a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="font-semibold mt-2 text-emerald-500 h-[20px]">
                    26.500<ins>đ</ins>
                  </div>
                  <div className="relative left-27">
                    <ul className="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-bag-shopping"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-300 mt-2 rounded-xl w-[210px] h-[20px] relative">
                <div className="bg-red-500 rounded-xl w-[185px] h-[20px] bottom-5"></div>
                <div>
                  <img
                    className="stroke-1 w-6 absolute left-1 bottom-1"
                    src="/imgs/fire_icon.svg"
                    alt=""
                  />
                  <div className="text-white relative bottom-5 text-xs text-center">
                    Đã bán 54
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ===== 2 ===== --> */}
            <div className="bg-white p-3 rounded-xl">
              <div className="relative">
                <div className="bg-emerald-500 absolute left-41 text-white text-sm p-1 rounded-tl-2xl rounded-br-2xl text-center h-[30px] w-[40px]">
                  32%
                </div>
              </div>
              <div>
                <img className="mt-7" src="/imgs/dau_ca_hoi.webp" alt="" />
              </div>

              <div>
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Củ, quả, măng tươi</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[50px] mt-2">
                    <a href="">Đầu cá hồi tươi túi 1kg (300g - 500g/cái)</a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="flex mt-2 gap-2">
                    <div className="font-semibold text-emerald-500 h-[20px]">
                      40.000<ins>đ</ins>
                    </div>
                    <div className="text-gray-400">
                      <del>
                        59.000<ins>đ</ins>
                      </del>
                    </div>
                  </div>
                  <div className="relative left-11">
                    <ul className="bg-emerald-50 border hover:bg-emerald-500 border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-bag-shopping"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-300 mt-2 rounded-xl w-[210px] h-[20px] relative">
                <div className="bg-red-500 rounded-xl w-[180px] h-[20px] bottom-5"></div>
                <div>
                  <img
                    className="stroke-1 w-6 absolute left-1 bottom-1"
                    src="/imgs/fire_icon.svg"
                    alt=""
                  />
                  <div className="text-white relative bottom-5 text-xs text-center">
                    Đã bán 173
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ===== 3 ===== --> */}
            <div className="bg-white p-3 rounded-xl">
              <div className="relative">
                <div className="bg-emerald-500 absolute left-41 text-white text-sm p-1 rounded-tl-2xl rounded-br-2xl text-center h-[30px] w-[40px]">
                  12%
                </div>
              </div>
              <div>
                <img className="mt-7" src="/imgs/tieu_den_xay.webp" alt="" />
              </div>

              <div>
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Sản phẩm mới</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[50px] mt-2">
                    <a href="">Tiêu đen xay Natas hũ 55g</a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="flex mt-2 gap-2">
                    <div className="font-semibold text-emerald-500 h-[20px]">
                      23.000<ins>đ</ins>
                    </div>
                    <div className="text-gray-400">
                      <del>
                        26.000<ins>đ</ins>
                      </del>
                    </div>
                  </div>
                  <div className="relative left-11">
                    <ul className="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-bag-shopping"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-300 mt-2 rounded-xl w-[210px] h-[20px] relative">
                <div className="bg-red-500 rounded-xl w-[180px] h-[20px] bottom-5"></div>
                <div>
                  <img
                    className="stroke-1 w-6 absolute left-1 bottom-1"
                    src="/imgs/fire_icon.svg"
                    alt=""
                  />
                  <div className="text-white relative bottom-5 text-xs text-center">
                    Đã bán 52
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ===== 4 ===== --> */}
            <div className="bg-white p-3 rounded-xl">
              <div>
                <img className="mt-7" src="/imgs/tieu_den_xay2.webp" alt="" />
              </div>

              <div>
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Sản phẩm mới</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[50px] mt-2">
                    <a href="">Tiêu đen xay Phú Quốc Minh Hà hũ 50g</a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="font-semibold mt-2 text-emerald-500 h-[20px]">
                    34.800<ins>đ</ins>
                  </div>
                  <div className="relative left-27">
                    <ul className="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-bag-shopping"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-300 mt-2 rounded-xl w-[210px] h-[20px] relative">
                <div className="bg-red-500 rounded-xl w-[90px] h-[20px] bottom-5"></div>
                <div>
                  <img
                    className="stroke-1 w-6 absolute left-1 bottom-1"
                    src="/imgs/fire_icon.svg"
                    alt=""
                  />
                  <div className="text-white relative bottom-5 text-xs text-center">
                    Đã bán 67
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ===== 5 ===== --> */}
            <div className="bg-white p-3 rounded-xl">
              <div className="relative">
                <div className="bg-emerald-500 absolute left-41 text-white text-sm p-1 rounded-tl-2xl rounded-br-2xl text-center h-[30px] w-[40px]">
                  51%
                </div>
              </div>
              <div>
                <img className="mt-7" src="/imgs/suon_gia_heo.webp" alt="" />
              </div>

              <div>
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Thịt các loại</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[50px] mt-2">
                    <a href="">Sườn già heo C.P khay 500g (9-11 miếng)</a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="flex mt-2 gap-2">
                    <div className="font-semibold text-emerald-500 h-[20px]">
                      73.000<ins>đ</ins>
                    </div>
                    <div className="text-gray-400">
                      <del>
                        150.000<ins>đ</ins>
                      </del>
                    </div>
                  </div>
                  <div className="relative left-9">
                    <ul className="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-300 mt-2 rounded-xl w-[210px] h-[20px] relative">
                <div className="bg-red-500 rounded-xl w-[210px] h-[20px] bottom-5"></div>
                <div>
                  <img
                    className="stroke-1 w-6 absolute left-1 bottom-1"
                    src="/imgs/fire_icon.svg"
                    alt=""
                  />
                  <div className="text-white relative bottom-5 text-xs text-center">
                    Hết hàng
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BRAND */}
        <h1 className="text-2xl font-semibold mb-5">Thương hiệu nổi bật</h1>

        <div className="flex gap-6 mb-8">
          <Image
            src="/imgs/wolf_brand_image.webp"
            alt="brand"
            width={450}
            height={300}
          />

          <div className="grid grid-cols-3 gap-5">
            {brands.map((img, i) => (
              <div
                key={i}
                className="border border-gray-300 hover:border-emerald-500 rounded-xl p-2"
              >
                <img src={`/imgs/${img}`} alt="brand" width={210} height={40} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-100 p-5">
        <div className="container m-auto w-300">
          <div className="grid grid-cols-2 mb-5">
            <h1 className="text-2xl font-semibold">Thịt, Cá, Trứng, Rau</h1>

            <div className="grid grid-cols-4">
              <Link
                href="#"
                className="bg-emerald-500 text-white rounded-sm text-sm p-2 m-2 gap-2 text-center"
              >
                Thịt, cá, trứng, rau
              </Link>
              <Link
                href="#"
                className="bg-stone-200 hover:bg-emerald-500 hover:text-white rounded-sm text-sm p-2 m-2 gap-2 text-center"
              >
                Hàng đông mát
              </Link>
              <Link
                href="#"
                className="bg-stone-200 hover:bg-emerald-500 hover:text-white rounded-sm text-sm p-2 m-2 gap-2 text-center"
              >
                Mì, miến, cháo,phở
              </Link>
              <Link
                href="#"
                className="bg-stone-200 hover:bg-emerald-500 hover:text-white rounded-sm text-sm p-2 m-2 gap-2 text-center"
              >
                Gạo, bột, đồ khô
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-5">
            <div>
              <img
                className="rounded-xl h-[335px]"
                src="/imgs/wolf_module_product_banner.webp"
                alt=""
              />
            </div>

            <div className="bg-white rounded-xl">
              <div>
                <img
                  className="mt-7"
                  src="/imgs/hop-30-trung-cut-tuoi.webp"
                  alt=""
                />
              </div>

              <div className="p-3">
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Sản phẩm mới</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                    <a href="">Hộp 30 trứng cút tươi V.Farm</a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="font-semibold mt-2 text-emerald-500 h-[20px]">
                    26.500<ins>đ</ins>
                  </div>
                  <div className="relative left-27">
                    <ul className="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-bag-shopping"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- sp1 --> */}

            <div className="bg-white rounded-xl">
              <div className="relative">
                <div className="bg-emerald-500 absolute left-41 m-2.5 text-white text-sm p-1 rounded-tl-2xl rounded-br-2xl text-center h-[30px] w-[40px]">
                  32%
                </div>
              </div>
              <div>
                <img className="mt-7" src="/imgs/dau_ca_hoi.webp" alt="" />
              </div>

              <div className="p-3">
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Củ, quả, măng tươi</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                    <a href="">Đầu cá hồi tươi túi 1kg (300g - 500g/cái)</a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="flex mt-2 gap-2">
                    <div className="font-semibold text-emerald-500 h-[20px]">
                      40.000<ins>đ</ins>
                    </div>
                    <div className="text-gray-400">
                      <del>
                        59.000<ins>đ</ins>
                      </del>
                    </div>
                  </div>
                  <div className="relative left-11">
                    <ul className="bg-emerald-50 border hover:bg-emerald-500 border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-bag-shopping"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- sp2 --> */}

            <div className="bg-white rounded-xl">
              <div className="relative">
                <div className="bg-emerald-500 absolute left-41 m-2.5 text-white text-sm p-1 rounded-tl-2xl rounded-br-2xl text-center h-[30px] w-[40px]">
                  12%
                </div>
              </div>
              <div>
                <img className="mt-7" src="/imgs/tieu_den_xay.webp" alt="" />
              </div>

              <div className="p-3">
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Sản phẩm mới</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                    <a href="">Tiêu đen xay Natas hũ 55g</a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="flex mt-2 gap-2">
                    <div className="font-semibold text-emerald-500 h-[20px]">
                      23.000<ins>đ</ins>
                    </div>
                    <div className="text-gray-400">
                      <del>
                        26.000<ins>đ</ins>
                      </del>
                    </div>
                  </div>
                  <div className="relative left-11">
                    <ul className="bg-emerald-50 border hover:bg-emerald-500 border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-bag-shopping"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- sp3 --> */}

            <div className="bg-white rounded-xl">
              <div>
                <img className="mt-7" src="/imgs/tieu_den_xay2.webp" alt="" />
              </div>

              <div className="p-3">
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Sản phẩm mới</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                    <a href="">Tiêu đen xay Phú Quốc Minh Hà hũ 50g</a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="font-semibold mt-2 text-emerald-500 h-[20px]">
                    34.800<ins>đ</ins>
                  </div>
                  <div className="relative left-27">
                    <ul className="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-bag-shopping"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- sp4 --> */}

            <div className="bg-white rounded-xl">
              <div className="relative">
                <div className="bg-emerald-500 absolute left-41 m-2.5 text-white text-sm p-1 rounded-tl-2xl rounded-br-2xl text-center h-[30px] w-[40px]">
                  51%
                </div>
              </div>

              <div>
                <img className="mt-7" src="/imgs/suon_gia_heo.webp" alt="" />
              </div>

              <div className="p-3">
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Thịt các loại</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                    <a href="">Sườn già heo C.P khay 500g (9-11 miếng)</a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="flex mt-2 gap-2">
                    <div className="font-semibold text-emerald-500 h-[20px]">
                      73.000<ins>đ</ins>
                    </div>
                    <div className="text-gray-400">
                      <del>
                        150.000<ins>đ</ins>
                      </del>
                    </div>
                  </div>
                  <div className="relative left-9">
                    <ul className="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- sp5 --> */}

            <div className="bg-white rounded-xl">
              <div className="relative">
                <div className="bg-emerald-500 absolute left-41 m-2.5 text-white text-sm p-1 rounded-tl-2xl rounded-br-2xl text-center h-[30px] w-[40px]">
                  62%
                </div>
              </div>

              <div>
                <img
                  className="mt-7"
                  src="/imgs/thitheo-c.p-300g.webp"
                  alt=""
                />
              </div>

              <div className="p-3">
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Thịt, cá, trứng, rau</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                    <a href="">Thịt heo xay C.P khay 300g</a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="flex mt-2 gap-2">
                    <div className="font-semibold text-emerald-500 h-[20px]">
                      34.500<ins>đ</ins>
                    </div>
                    <div className="text-gray-400">
                      <del>
                        90.000<ins>đ</ins>
                      </del>
                    </div>
                  </div>
                  <div className="relative left-11">
                    <ul className="bg-emerald-50 border hover:bg-emerald-500 border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-bag-shopping"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- sp6 --> */}

            <div className="bg-white rounded-xl">
              <div>
                <img
                  className="mt-7"
                  src="/imgs/than-bo-tuoi-88-khay-250g.webp"
                  alt=""
                />
              </div>

              <div className="p-3">
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Thịt các loại</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                    <a href="">Thăn Bò tươi 88 khay 250g</a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="font-semibold mt-2 text-emerald-500 h-[20px]">
                    98.000<ins>đ</ins>
                  </div>
                  <div className="relative left-27">
                    <ul className="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-bag-shopping"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- sp7 --> */}

            <div className="bg-white rounded-xl">
              <div>
                <img
                  className="mt-7"
                  src="/imgs/vai-bo-uc-tuoi-hut-chan-khong-khay-250g.webp"
                  alt=""
                />
              </div>

              <div className="p-3">
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Thịt các loại</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                    <a href="">
                      Vai bò Úc tươi Trung Đồng hút chân không khay 250g
                    </a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="font-semibold mt-2 text-emerald-500 h-[20px]">
                    105.000<ins>đ</ins>
                  </div>
                  <div className="relative left-27">
                    <ul className="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-cart-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- sp8 --> */}

            <div className="bg-white rounded-xl">
              <div>
                <img
                  className="mt-7"
                  src="/imgs/bap-bo-uc-tuoi-hut-chan-khong-khay-250g.webp"
                  alt=""
                />
              </div>

              <div className="p-3">
                <ul>
                  <li className="text-xs hover:text-emerald-500 mt-4 text-gray-400">
                    <a href="">Thịt các loại</a>
                  </li>
                  <li className="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                    <a href="">
                      Bắp bò Úc tươi Trung Đồng hút chân không khay 250g
                    </a>
                  </li>
                </ul>

                <div className="flex">
                  <div className="font-semibold mt-2 text-emerald-500 h-[20px]">
                    109.000<ins>đ</ins>
                  </div>
                  <div className="relative left-27">
                    <ul className="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                      <li className="text-emerald-500 hover:text-white text-center text-xl p-1">
                        <a href="">
                          <i className="fa-solid fa-bag-shopping"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- sp9 --> */}
          </div>
        </div>
      </div>

      <div className="m-auto w-300">
        <div className="flex justify-between mt-5">
          <img className="w-[590px]" src="/imgs/feature_banner_1.jpg" alt="" />
          <img className="w-[590px]" src="/imgs/feature_banner_2.webp" alt="" />
        </div>

        <div className="flex gap-8 mt-7">
          <div>
            <img
              className="w-[500px]"
              src="/imgs/wolf_banner_small.webp"
              alt=""
            />
          </div>
          <div className="divide-y-1 divide-gray-300 mb-15">
            <h1 className="text-xl font-semibold pb-2">Sữa các loại</h1>
            <div className="grid grid-cols-3 gap-5 mt-3">
              <div className="flex gap-4">
                <div className="aspect-square object-cover flex justify-center">
                  <img
                    className="w-[100px]"
                    src="/imgs/hop-30-trung-cut-tuoi.webp"
                    alt=""
                  />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Hộp 30 trứng cút tươi V.Farm
                  </h3>
                  <h3 className="text-emerald-500 font-semibold">
                    26.500<ins>đ</ins>
                  </h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="aspect-square object-cover flex justify-center">
                  <img
                    className="w-[100px]"
                    src="/imgs/thung-24-lon-bia-san-miguel-cerveza-blanca-lon-490ml.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold">
                    Thùng 24 lon bia San Miguel Cerveza Blanca l...
                  </h3>
                  <h3 className="text-emerald-500 font-semibold">
                    160.000<ins>đ</ins>
                  </h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="aspect-square object-cover flex justify-center">
                  <img
                    className="w-[100px]"
                    src="/imgs/khay-24-lon-bia-heineken-silver-330ml.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold">
                    Khay 24 lon bia Heineken Silver 330ml
                  </h3>
                  <h3 className="text-emerald-500 font-semibold">
                    128.000<ins>đ</ins>
                  </h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="aspect-square object-cover flex justify-center">
                  <img
                    className="w-[100px]"
                    src="/imgs/thung-24-lon-bia-333-330ml.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Thùng 24 lon bia 333 330ml</h3>
                  <h3 className="text-emerald-500 font-semibold">
                    74.000<ins>đ</ins>
                  </h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="aspect-square object-cover flex justify-center">
                  <img
                    className="w-[100px]"
                    src="/imgs/thung-24-lon-bia-viet-330ml.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold">
                    Thùng 24 lon bia Bia Việt 330ml
                  </h3>
                  <h3 className="text-emerald-500 font-semibold">
                    74.000<ins>đ</ins>
                  </h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="aspect-square object-cover flex justify-center">
                  <img
                    className="w-[100px]"
                    src="/imgs/thung-24-lon-bia-carlsberg-smooth-draught-330ml.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold">
                    Thùng 24 lon bia Carlsberg Smooth Draught 330ml
                  </h3>
                  <h3 className="text-emerald-500 font-semibold">
                    118.000<ins>đ</ins>
                  </h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="aspect-square object-cover flex justify-center">
                  <img
                    className="w-[100px]"
                    src="/imgs/thung-24-lon-bia-heineken-silver-330ml.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold">
                    Thùng 24 lon bia Heineken Silver 330ml
                  </h3>
                  <h3 className="text-emerald-500 font-semibold">
                    128.000<ins>đ</ins>
                  </h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="aspect-1/1 object-cover flex justify-center">
                  <img
                    className="w-[100px] h-[70px] mt-2"
                    src="/imgs/tieu_den_xay.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Tiêu đen xay Natas hũ 55g</h3>
                  <h3 className="text-emerald-500 font-semibold">
                    23.000<ins>đ</ins>
                  </h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="aspect-square object-cover flex justify-center">
                  <img
                    className="w-[100px] h-[70px] mt-2"
                    src="/imgs/tieu_den_xay2.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold">
                    Tiêu đen xay Phú Quốc Minh Hà hũ 50g
                  </h3>
                  <h3 className="text-emerald-500 font-semibold">
                    34.800<ins>đ</ins>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ========================== END PRODUCT-CATEGORY ============================= -->

      <!-- =========================== DANH SACH BAI VIET ==================== --> */}
      <div className="m-auto w-300">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-5">Món ngon mỗi ngày</h1>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex gap-3">
              <div>
                <img
                  className="w-200"
                  src="/imgs/gan-100-loai-banh-dan-gian.webp"
                  alt=""
                />
              </div>
              <div className="text-sm leading-6">
                <h3 className="text-xl font-semibold">
                  Gần 100 loại bánh dân gian hội tụ ở miền Tây
                </h3>
                <p className="text-gray-400">
                  <i>Wednesday, 13/04/2022</i>
                </p>
                <p>
                  Rất nhiều món ăn ngon được người dân miền Tây mang đến lễ hội
                  bánh dân gian Nam Bộ kéo dài đến 11-12/4 tại Cần Thơ, Cà Mau.
                  Giỗ Tổ Hùng Vương năm n...
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <img
                  className="w-200"
                  src="/imgs/10-trai-nghiem-am-thuc-phai-thu.webp"
                  alt=""
                />
              </div>
              <div className="text-sm leading-6">
                <h3 className="text-xl font-semibold">
                  10 trải nghiệm ẩm thực phải thử trong năm 2022
                </h3>
                <p className="text-gray-400">
                  <i>Wednesday, 23/03/2022</i>
                </p>
                <p>
                  Lonely Planet vừa chọn ra những trải nghiệm ẩm thực nổi bật
                  cho du khách trải nghiệm trên khắp thế giới trong năm 2022, từ
                  sushi ở Tokyo đến som tu...
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <img
                  className="w-200"
                  src="/imgs/bien-tau-nhan-banh-mi.jpeg"
                  alt=""
                />
              </div>
              <div className="text-sm leading-6">
                <h3 className="text-xl font-semibold">
                  Biến tấu nhân bánh mì cho bữa sáng lành mạnh
                </h3>
                <p className="text-gray-400">
                  <i>Wednesday, 23/03/2022</i>
                </p>
                <p>
                  Hải sản, trứng, rau củ đều phù hợp để ăn kèm sandwich, burger.
                  Chỉ với 15 phút thực hiện, bạn có thể hoàn thành bữa ăn ngon
                  cho ngày mới. Bur...
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <img
                  className="w-200"
                  src="/imgs/thuong-thuc-bua-toi.jpeg"
                  alt=""
                />
              </div>
              <div className="text-sm leading-6">
                <h3 className="text-xl font-semibold">
                  Thưởng thức bữa tối với món súp sủi cảo dễ làm
                </h3>
                <p className="text-gray-400">
                  <i>Wednesday, 13/04/2022</i>
                </p>
                <p>
                  Chỉ với 20 phút chế biến, bạn có ngay phần súp ấm nóng, giàu
                  dinh dưỡng để thỏa mãn vị giác sau ngày dài học tập, làm việc.
                  Nguyên liệu 12 ...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <ul className="bg-emerald-50 w-[270px] h-[50px] rounded-xl border-1 border-green-400">
            <li className="p-3 text-center text-sm font-semibold">
              <a href="">Xem tất cả tin Món ngon mỗi ngày</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
