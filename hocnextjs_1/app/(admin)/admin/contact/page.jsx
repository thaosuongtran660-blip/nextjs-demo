"use client";

import React, { useState } from "react";
import { FiMail, FiSend, FiUser, FiMessageSquare, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    setIsSending(true);
    setTimeout(() => {
      alert("Đã gửi tin nhắn liên hệ thành công! Chúng tôi sẽ phản hồi sớm nhất.");
      setForm({ name: "", email: "", message: "" });
      setIsSending(false);
    }, 1200);
  };

  return (
    <div className="p-8 min-h-screen bg-slate-50/50">
      {/* Header section */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
          <FiMail className="text-blue-600" />
          Hỗ trợ & Liên hệ
        </h1>
        <p className="text-slate-500 mt-1">
          Gửi phản hồi, báo cáo lỗi hệ thống hoặc liên hệ với đội ngũ kỹ thuật.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Contact Form */}
        <div className="bg-white p-8 rounded-3xl border border-slate-150 shadow-md shadow-slate-100/50 lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FiMessageSquare className="text-blue-500" />
            Gửi tin nhắn cho chúng tôi
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name input */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Họ và tên</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên của bạn..."
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm placeholder-slate-400"
                />
                <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400">
                  <FiUser className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Email input */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Địa chỉ Email</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm placeholder-slate-400"
                />
                <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400">
                  <FiMail className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Message textarea */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Nội dung tin nhắn</label>
              <div className="relative">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Nhập nội dung phản hồi, ý kiến hoặc mô tả lỗi..."
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm placeholder-slate-400"
                ></textarea>
                <span className="absolute left-3.5 top-5 text-slate-400">
                  <FiMessageSquare className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 active:scale-95 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Đang gửi...</span>
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  <span>Gửi tin nhắn</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Side: Contact Cards */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-150 shadow-md shadow-slate-100/50">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Thông tin hỗ trợ</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 shrink-0">
                  <FiPhone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase">Điện thoại</h4>
                  <p className="text-slate-800 text-sm font-semibold mt-0.5">+84 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl border border-purple-100 shrink-0">
                  <FiMail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase">Email hỗ trợ</h4>
                  <p className="text-slate-800 text-sm font-semibold mt-0.5">support@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100 shrink-0">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase">Văn phòng</h4>
                  <p className="text-slate-800 text-sm mt-0.5 leading-relaxed">
                    123 Đường Cách Mạng Tháng 8, Quận 3, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-md">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <FiClock className="text-blue-400" />
              Thời gian làm việc
            </h3>
            <p className="text-slate-400 text-xs mt-3 leading-relaxed">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn từ <strong className="text-white">Thứ Hai đến Thứ Sáu (8:00 AM - 6:00 PM)</strong>. Các yêu cầu gửi ngoài giờ làm việc sẽ được xử lý vào ngày làm việc tiếp theo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
