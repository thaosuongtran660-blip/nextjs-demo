"use client";

import AlbumService from "@/app/_services/AlbumService";
import { useState, useEffect } from "react";

export default function ListPost() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    (async () => {
      const p = await AlbumService.getAll();
      setAlbums(p);
    })();
  }, []);
  return (
    <>
      <table className="border-2 m-10">
        <thead>
          <tr>
            <th>UserId</th>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {albums &&
            albums.length > 0 &&
            albums.map((item, index) => {
              return (
                <tr key={index} className="border-2">
                  <td className="border-2 p-3 text-center">{item.userId}</td>
                  <td className="border-2 p-3">{item.id}</td>
                  <td className="border-2 p-3">{item.title}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
