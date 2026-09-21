import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div class="w-full bg-gray-100">
        <div class="m-auto w-300 flex gap-4 h-[56px] text-sm pt-5">
          <div class="hover:text-emerald-500">
            <Link href="/">Trang chủ</Link>
          </div>
          <p>/</p>
          <div class="text-emerald-500">Liên hệ</div>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto py-28 px-4">
        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-8 text-center">
          Liên hệ với chúng tôi
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT - INFO */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Thông tin liên hệ</h2>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-emerald-500 text-xl" />
              <p>123 Đường ABC, Quận 1, TP.HCM</p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-emerald-500 text-xl" />
              <p>0123 456 789</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-emerald-500 text-xl" />
              <p>support@wolffood.vn</p>
            </div>

            {/* MAP */}
            <div className="mt-6">
              <iframe
                src="https://maps.google.com/maps?q=ho%20chi%20minh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[250px] rounded-xl border"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">
              Gửi tin nhắn cho chúng tôi
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full border p-3 rounded-lg focus:outline-none focus:border-emerald-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-lg focus:outline-none focus:border-emerald-500"
              />

              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-full border p-3 rounded-lg focus:outline-none focus:border-emerald-500"
              />

              <textarea
                rows="4"
                placeholder="Nội dung..."
                className="w-full border p-3 rounded-lg focus:outline-none focus:border-emerald-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 font-semibold"
              >
                Gửi liên hệ
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
