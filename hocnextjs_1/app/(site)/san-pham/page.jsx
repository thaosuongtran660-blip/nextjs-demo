import Image from "next/image";
import Link from "next/link";

const Product = () => {
  return (
    <>
      <div>
        <div class="w-full bg-gray-100">
          <div class="m-auto w-300 flex gap-4 h-[50px] text-sm pt-3">
            <div class="hover:text-emerald-500">
              <Link href="/">Trang chủ</Link>
            </div>
            <p>/</p>
            <div class="text-emerald-500">Tất cả sản phẩm</div>
          </div>
        </div>
      </div>

      <div class="w-300 m-auto mt-5">
        <div class="flex gap-5">
          <div class="border-1 border-gray-200 rounded-md w-180 h-305">
            <div class="bg-gray-100 p-2 rounded-t-md">
              <h1 class="text-lg font-semibold">Bộ Lọc Sản Phẩm</h1>
            </div>

            <div class="p-3">
              <h3 class="text-sm font-semibold mb-3">Nhà cung cấp</h3>
              <form class="overflow-y-scroll h-[220px] text-sm leading-8">
                <input
                  class="accent-emerald-500"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 1"
                />
                <label class="hover:text-emerald-500" for="option1">
                  <a href="">V.Farm</a>
                </label>
                <br />

                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 2"
                />
                <label for="option2"> San Miguel</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 3"
                />
                <label for="option3"> 333</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 4"
                />
                <label for="option4"> Bia Việt</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 5"
                />
                <label for="option5"> Carleberg</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 6"
                />
                <label for="option6"> Heineken</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 7"
                />
                <label for="option7"> Larue</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 8"
                />
                <label for="option8"> Budweiser</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 9"
                />
                <label for="option9"> Tiger</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 10"
                />
                <label for="option10"> Mleko Zambrowskie</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 11"
                />
                <label for="option11"> Harvery Fresh</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 12"
                />
                <label for="option12"> Nestle</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 13"
                />
                <label for="option13"> Vinamilk</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 14"
                />
                <label for="option14"> Nuvi</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 15"
                />
                <label for="option15"> Australia's Owm</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 16"
                />
                <label for="option16"> Dalat Milk</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 17"
                />
                <label for="option17"> CP</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 18"
                />
                <label for="option18"> Bò tươi 88</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 19"
                />
                <label for="option19"> Wolf Food</label>
              </form>
            </div>

            <div class="p-3">
              <h3 class="text-sm font-semibold mb-3">Loại sản phẩm</h3>
              <form class="overflow-y-scroll h-[220px] text-sm leading-8">
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 1"
                />
                <label for="option1"> Trứng</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 2"
                />
                <label for="option2"> Bia</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 3"
                />
                <label for="option3"> Sữa tươi</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 4"
                />
                <label for="option4"> Cá nước ngọt</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 5"
                />
                <label for="option5"> Tiêu đen</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 6"
                />
                <label for="option6"> Sườn heo</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 7"
                />
                <label for="option7"> Thịt heo</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 8"
                />
                <label for="option8"> Thịt bò</label>
              </form>
            </div>

            <div class="p-3">
              <h3 class="text-sm font-semibold mb-3">Giá sản phẩm</h3>
              <form class="h-[200px] text-sm leading-8">
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 1"
                />
                <label for="option1"> Giá dưới 100.000đ</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 2"
                />
                <label for="option2"> 100.000đ - 200.000đ</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 3"
                />
                <label for="option3"> 200.000đ - 300.000đ</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 4"
                />
                <label for="option4"> 300.000đ - 500.000đ</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 5"
                />
                <label for="option5"> 500.000đ - 1.000.000đ</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 6"
                />
                <label for="option6"> Giá trên 1.000.000</label>
                <br />
              </form>
            </div>

            <div class="p-3">
              <h3 class="text-sm font-semibold mb-3">Đóng gói</h3>
              <form class="h-[100px] text-sm leading-8">
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 1"
                />
                <label for="option1"> Hộp</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 2"
                />
                <label for="option2"> Chai</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 3"
                />
                <label for="option3"> Thùng</label>
              </form>
            </div>

            <div class="p-3">
              <h3 class="text-sm font-semibold">Cân nặng</h3>
              <form class="text-sm leading-8">
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 1"
                />
                <label for="option1"> 250 gram</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 2"
                />
                <label for="option2"> 500 gram</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option3"
                  name="list"
                  value="Option 3"
                />
                <label for="option3"> 750 gram</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option1"
                  name="list"
                  value="Option 4"
                />
                <label for="option4"> 1kg</label>
                <br />
                <input
                  class="accent-emerald-500 text-white"
                  type="checkbox"
                  id="option2"
                  name="list"
                  value="Option 5"
                />
                <label for="option5"> 2kg</label>
              </form>
            </div>
          </div>

          <div class="text-sm leading-7">
            <h1 class="text-2xl font-semibold mb-3">Tất cả sản phẩm</h1>
            <p>
              Chúng tôi mong muốn mang đến sự nhanh chóng và tiện lợi tối đa khi
              mua sắm đến cho khách hàng bằng việc đưa hệ thống siêu thị Wolf
              Food phủ rộng khắp mọi khu vực kể cả vùng nông thôn. Bên cạnh đó,
              chúng tôi cũng tập trung phát triển kênh mua sắm online trên
              website Wolf Food để phục vụ cho mọi đối tượng, đặc biệt là nhóm
              khách hàng trẻ.
            </p>
            <p>
              Wolf Food cũng không ngừng tìm kiếm và mang đến sự đa dạng trong
              việc lựa chọn sản phẩm với hơn 12.000 sản phẩm đủ chủng loại, xuất
              xứ rõ ràng, giá cả hợp lý, minh bạch.
            </p>

           <div className="mb-6">
                     <Image
                       src="/imgs/cat-banner-1.webp"
                       alt="banner"
                       width={1200}
                       height={400}
                       priority
                     />
                   </div>
            <div class="flex gap-2 mt-5 mb-5">
              <div>
                <i class="fa-solid fa-arrow-down-z-a"></i>
              </div>
              <h3>Xếp theo</h3>
              <form class="flex gap-2">
                <input type="radio" id="option" name="list" value="Option" />
                <label for="option"> Tên A-Z</label>
                <br />
                <input type="radio" id="option" name="list" value="Option" />
                <label for="option"> Tên Z-A</label>
                <br />
                <input type="radio" id="option" name="list" value="Option" />
                <label for="option"> Giá thấp đến cao</label>
                <br />
                <input type="radio" id="option" name="list" value="Option" />
                <label for="option"> Giá cao xuống thấp</label>
              </form>
            </div>

            <div class="grid grid-cols-4 gap-5">
              <div class="rounded-xl">
                <div class="h-40">
                  <img class="mt-12" src="/imgs/demo.webp" alt="" />
                </div>

                <div class="p-3 mt-4">
                  <ul>
                    <li class="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                      <a href="">demo</a>
                    </li>
                  </ul>

                  <div class="flex">
                    <div class="font-semibold mt-2 text-emerald-500 h-[20px]">
                      Liên hệ
                    </div>
                    <div class="relative left-25">
                      <ul class="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                        <li class="text-emerald-500 hover:text-white text-center text-xl p-1">
                          <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-xl">
                <div class="h-45">
                  <img
                    class="mt-7"
                    src="../imgs/hop-30-trung-cut-tuoi.webp"
                    alt=""
                  />
                </div>

                <div class="p-3">
                  <ul>
                    <li class="text-xs hover:text-emerald-500 text-gray-400">
                      <a href="">Sản phẩm mới</a>
                    </li>
                    <li class="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                      <a href="">Hộp 30 trứng cút tươi V.Farm</a>
                    </li>
                  </ul>

                  <div class="flex">
                    <div class="font-semibold mt-2 text-emerald-500 h-[20px]">
                      26.500<ins>đ</ins>
                    </div>
                    <div class="relative left-25">
                      <ul class="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                        <li class="text-emerald-500 hover:text-white text-center text-xl p-1">
                          <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-xl">
                <div>
                  <img
                    class="w-55"
                    src="/imgs/thung-24-lon-bia-san-miguel-cerveza-blanca-lon-490ml.webp"
                    alt=""
                  />
                </div>

                <div class="p-3">
                  <ul>
                    <li class="text-xs hover:text-emerald-500 text-gray-400">
                      <a href="">Rau xanh, Rau tươi</a>
                    </li>
                    <li class="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                      <a href="">
                        Thùng 24 lon bia San Miguel Cerveza Blanca lon 490ml
                      </a>
                    </li>
                  </ul>

                  <div class="flex">
                    <div class="font-semibold mt-2 text-emerald-500 h-[20px]">
                      160.000<ins>đ</ins>
                    </div>
                    <div class="relative left-25">
                      <ul class="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                        <li class="text-emerald-500 hover:text-white text-center text-xl p-1">
                          <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-xl">
                <div>
                  <img
                    class="w-55"
                    src="/imgs/khay-24-lon-bia-heineken-silver-330ml.webp"
                    alt=""
                  />
                </div>

                <div class="p-3">
                  <ul>
                    <li class="text-xs hover:text-emerald-500 text-gray-400">
                      <a href="">Rau xanh, Rau tươi</a>
                    </li>
                    <li class="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                      <a href="">Khay 24 lon bia Heineken Silver 330ml</a>
                    </li>
                  </ul>

                  <div class="flex">
                    <div class="font-semibold mt-2 text-emerald-500 h-[20px]">
                      128.000<ins>đ</ins>
                    </div>
                    <div class="relative left-25">
                      <ul class="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                        <li class="text-emerald-500 hover:text-white text-center text-xl p-1">
                          <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-xl">
                <div>
                  <img
                    class="w-55"
                    src="/imgs/thung-24-lon-bia-333-330ml.webp"
                    alt=""
                  />
                </div>

                <div class="p-3">
                  <ul>
                    <li class="text-xs hover:text-emerald-500 text-gray-400">
                      <a href="">Rau xanh, Rau tươi</a>
                    </li>
                    <li class="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                      <a href="">Thùng 24 lon bia 333 330ml</a>
                    </li>
                  </ul>

                  <div class="flex">
                    <div class="font-semibold mt-2 text-emerald-500 h-[20px]">
                      74.000<ins>đ</ins>
                    </div>
                    <div class="relative left-25">
                      <ul class="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                        <li class="text-emerald-500 hover:text-white text-center text-xl p-1">
                          <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-xl">
                <div>
                  <img
                    class="w-55"
                    src="/imgs/thung-24-lon-bia-viet-330ml.webp"
                    alt=""
                  />
                </div>

                <div class="p-3">
                  <ul>
                    <li class="text-xs hover:text-emerald-500 text-gray-400">
                      <a href="">Rau xanh, Rau tươi</a>
                    </li>
                    <li class="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                      <a href="">Thùng 24 lon bia Bia Việt 330ml</a>
                    </li>
                  </ul>

                  <div class="flex">
                    <div class="font-semibold mt-2 text-emerald-500 h-[20px]">
                      74.000<ins>đ</ins>
                    </div>
                    <div class="relative left-25">
                      <ul class="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                        <li class="text-emerald-500 hover:text-white text-center text-xl p-1">
                          <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-xl">
                <div>
                  <img
                    class="w-55"
                    src="/imgs/thung-24-lon-bia-carlsberg-smooth-draught-330ml.webp"
                    alt=""
                  />
                </div>

                <div class="p-3">
                  <ul>
                    <li class="text-xs hover:text-emerald-500 text-gray-400">
                      <a href="">Rau xanh, Rau tươi</a>
                    </li>
                    <li class="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                      <a href="">
                        Thùng 24 lon bia Carlsberg Smooth Draught 330ml
                      </a>
                    </li>
                  </ul>

                  <div class="flex">
                    <div class="font-semibold mt-2 text-emerald-500 h-[20px]">
                      118.000<ins>đ</ins>
                    </div>
                    <div class="relative left-25">
                      <ul class="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                        <li class="text-emerald-500 hover:text-white text-center text-xl p-1">
                          <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-xl">
                <div>
                  <img
                    class="w-55"
                    src="/imgs/thung-24-lon-bia-heineken-silver-330ml.webp"
                    alt=""
                  />
                </div>

                <div class="p-3">
                  <ul>
                    <li class="text-xs hover:text-emerald-500 text-gray-400">
                      <a href="">Rau xanh, Rau tươi</a>
                    </li>
                    <li class="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                      <a href="">Thùng 24 lon bia Heineken Silver 330ml</a>
                    </li>
                  </ul>

                  <div class="flex">
                    <div class="font-semibold mt-2 text-emerald-500 h-[20px]">
                      128.000<ins>đ</ins>
                    </div>
                    <div class="relative left-25">
                      <ul class="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                        <li class="text-emerald-500 hover:text-white text-center text-xl p-1">
                          <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-xl">
                <div>
                  <img
                    class="w-55"
                    src="/imgs/thung-24-lon-bia-larue-special-330ml.webp"
                    alt=""
                  />
                </div>

                <div class="p-3">
                  <ul>
                    <li class="text-xs hover:text-emerald-500 text-gray-400">
                      <a href="">Rau xanh, Rau tươi</a>
                    </li>
                    <li class="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                      <a href="">Thùng 24 lon bia Larue Special 330ml</a>
                    </li>
                  </ul>

                  <div class="flex">
                    <div class="font-semibold mt-2 text-emerald-500 h-[20px]">
                      67.000<ins>đ</ins>
                    </div>
                    <div class="relative left-25">
                      <ul class="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                        <li class="text-emerald-500 hover:text-white text-center text-xl p-1">
                          <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-xl">
                <div>
                  <img
                    class="w-55"
                    src="/imgs/thung-20-lon-bia-budweiser-330ml.webp"
                    alt=""
                  />
                </div>

                <div class="p-3">
                  <ul>
                    <li class="text-xs hover:text-emerald-500 text-gray-400">
                      <a href="">Củ, quả, măng tươi</a>
                    </li>
                    <li class="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                      <a href="">Thùng 20 lon bia Budweiser 330ml</a>
                    </li>
                  </ul>

                  <div class="flex">
                    <div class="font-semibold mt-2 text-emerald-500 h-[20px]">
                      105.000<ins>đ</ins>
                    </div>
                    <div class="relative left-25">
                      <ul class="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                        <li class="text-emerald-500 hover:text-white text-center text-xl p-1">
                          <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-xl">
                <div>
                  <img
                    class="w-55"
                    src="/imgs/thung-24-lon-bia-tiger-330ml.webp"
                    alt=""
                  />
                </div>

                <div class="p-3">
                  <ul>
                    <li class="text-xs hover:text-emerald-500 text-gray-400">
                      <a href="">Củ, quả, măng tươi</a>
                    </li>
                    <li class="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                      <a href="">Thùng 24 lon bia Tiger 330ml</a>
                    </li>
                  </ul>

                  <div class="flex">
                    <div class="font-semibold mt-2 text-emerald-500 h-[20px]">
                      99.000<ins>đ</ins>
                    </div>
                    <div class="relative left-25">
                      <ul class="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                        <li class="text-emerald-500 hover:text-white text-center text-xl p-1">
                          <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-xl">
                <div>
                  <img
                    class="w-55"
                    src="/imgs/thung-12-hop-sua-tiet-trung-mleko-zambrowskie-15-beo-1-lit.webp"
                    alt=""
                  />
                </div>

                <div class="p-3">
                  <ul>
                    <li class="text-xs hover:text-emerald-500 text-gray-400">
                      <a href="">Củ, quả, măng tươi</a>
                    </li>
                    <li class="font-semibold text-sm hover:text-emerald-500 h-[35px] mt-2">
                      <a href="">
                        Thùng 12 hộp sữa tiệt trùng Mleko Zambrowskie 1.5%...
                      </a>
                    </li>
                  </ul>

                  <div class="flex">
                    <div class="font-semibold mt-2 text-emerald-500 h-[20px]">
                      68.000<ins>đ</ins>
                    </div>
                    <div class="relative left-25">
                      <ul class="bg-emerald-50 hover:bg-emerald-500 border border-emerald-200 w-[40px] h-[40px] rounded-3xl">
                        <li class="text-emerald-500 hover:text-white text-center text-xl p-1">
                          <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center space-x-2 mt-6 mb-4">
          <button class="px-3 py-2 rounded-md">
            <span>&larr;</span>
          </button>

          <button class="px-4 py-2 rounded-md bg-green-500 text-white font-medium">
            <Link href=""> 1</Link>
          </button>

          <button class="px-4 py-2 rounded-md bg-gray-100 hover:bg-green-500 hover:text-white font-medium">
            <Link href="">2</Link>
          </button>

          <button class="px-4 py-2 rounded-md bg-gray-100 hover:bg-green-500 hover:text-white font-medium">
            <Link href="">3</Link>
          </button>

          <button class="px-3 py-2 rounded-md bg-gray-100 hover:bg-green-500 hover:text-white">
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
