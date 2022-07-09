import React from "react";
import img from "../assets/archive.png";

const Archive = () => {
  const archives = __dirname + "../archives";
  console.log(archives);
  const files = [{ name: "29 Juillet 2022", file: "29072022" }];
  return (
    <div>
      <h1 className="text-4xl font-bold my-6">Archives</h1>
      <div className="grid grid-cols-3 gap-5">
        {files.map((file, id) => (
          <div key={id}>
            <h2>{file.name}</h2>
            <img src={img} />
            <a
              href={`${archives}/${file.file}.csv`}
              className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#F28A89] hover:bg-[#e25151] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dropdown"
            >
              Télécharger
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
