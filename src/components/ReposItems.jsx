import { ArrowSquareOut, Book } from "phosphor-react";
import { parseISO, format } from "date-fns";

export const ReposItems = ({ data }) => {
  const { name, description, html_url, archived, pushed_at } = data;

  const [dateValues, timeValues] = pushed_at.split("T");
  const timeValueSet = timeValues.replace("Z", "");
  const date = (format(parseISO(dateValues), "dd-MM-yyyy"));

  return (
    <>
      <ul className="w-full p-4 bg-[#282828] rounded-xl">
        <li className="flex justify-between items-center">
          <div>
            <span className="flex items-center mb-2">
              <Book size={24} />
              <h1 className="text-xl pl-2 font-semibold">{name}</h1>
              <span className="border-2 border-gray-200 rounded-full px-4 text-xs ml-4 hidden md:block">
                {archived ? "Archived" : "Public"}
              </span>
            </span>
            <span className="border-2 border-gray-200 rounded-full px-4 mb-16 text-xs inline md:hidden">
              {archived ? "Archived" : "Public"}
            </span>
            <p className="text-sm mt-4 md:mt-0">{description}</p>
            <span className="text-xs text-red-500">
              Data: {date} Hora: {timeValueSet}
            </span>
          </div>
          <a href={html_url}>
            <ArrowSquareOut size={32} />
          </a>
        </li>
      </ul>
    </>
  );
};
