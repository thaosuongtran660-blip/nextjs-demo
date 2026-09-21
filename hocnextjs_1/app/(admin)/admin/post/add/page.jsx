"use client";
import { useState } from "react";
import PostService from "@/app/_services/PostService";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userid, setUserid] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await PostService.insert({ title, content });
    alert("Thêm thành công!");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Thêm bài viết</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Tiêu đề</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Tên tài khoản</label>
          <input
            type="text"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Hình ảnh</label>
          <input
            type="file"
            value={image}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Nội dung</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              height: "100px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Thêm bài viết
        </button>
      </form>
    </div>
  );
}
