import { ArrowSquareOut, Book } from "phosphor-react";
import React, { useState } from "react";
import { SearchBar } from "./SearchBar";

export const buttons = [
  {
    name: "Arquivados",
    value: "arquivados",
  },
  {
    name: "Ordenação alfabética",
    value: "ordenação alfabética",
  },
  {
    name: "Último commit",
    value: "ultimoCommit",
  },
];

// const [filtredRepos, setFiltredRepos] = useState(null);
// useEffect(() => {
//   setFiltredRepos(getPokemon());
// }, []);

// function handlePokemon(e) {
//   let typePokemon = e.target.value;
//   typePokemon !== "all"
//     ? setFiltredRepos(filterPokemon(typePokemon))
//     : setFiltredRepos(getPokemon());
// }

export const Repos = (props) => {
  return (
    <div className="flex flex-col items-center">
      <SearchBar />
      <div className="flex pt-4 w-full justify-around">
        {buttons &&
          buttons.map((type, index) => (
            <>
              <button
                key={index}
                value={type.value}
                className="bg-red-600 px-8 py-2 rounded-full font-medium"
              >
                {type.name}
              </button>
            </>
          ))}
      </div>

      <ul className="w-full p-4 bg-[#282828] rounded-xl mt-4">
        <li className="flex justify-between">
          <div>
            <span className="flex items-center">
              <Book size={24} />
              <h1 className="text-xl pl-2 font-semibold">photobook</h1>
            </span>
            <p className="text-sm">Gallery using React TS, Api Pexels and Tailwind CSS</p>
          </div>
          <button>
            <ArrowSquareOut size={32} />
          </button>
        </li>
      </ul>
      <ul className="w-full p-4 bg-[#282828] rounded-xl mt-4">
        <li className="flex justify-between">
          <div>
            <span className="flex items-center">
              <Book size={24} />
              <h1 className="text-xl pl-2 font-semibold">photobook</h1>
            </span>
            <p className="text-sm">Gallery using React TS, Api Pexels and Tailwind CSS</p>
          </div>
          <button>
            <ArrowSquareOut size={32} />
          </button>
        </li>
      </ul>
      <ul className="w-full p-4 bg-[#282828] rounded-xl mt-4">
        <li className="flex justify-between">
          <div>
            <span className="flex items-center">
              <Book size={24} />
              <h1 className="text-xl pl-2 font-semibold">photobook</h1>
            </span>
            <p className="text-sm">Gallery using React TS, Api Pexels and Tailwind CSS</p>
          </div>
          <button>
            <ArrowSquareOut size={32} />
          </button>
        </li>
      </ul>
      <ul className="w-full p-4 bg-[#282828] rounded-xl mt-4">
        <li className="flex justify-between">
          <div>
            <span className="flex items-center">
              <Book size={24} />
              <h1 className="text-xl pl-2 font-semibold">photobook</h1>
            </span>
            <p className="text-sm">Gallery using React TS, Api Pexels and Tailwind CSS</p>
          </div>
          <button>
            <ArrowSquareOut size={32} />
          </button>
        </li>
      </ul>


      {/* {filtredRepos &&
        filtredRepos.map((type) => (
          <ul key={type.id}>
            <li>{type.nome}</li>
          </ul>
        ))} */}
    </div>
  );
};
