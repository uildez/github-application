import { ArrowSquareOut, Book } from "phosphor-react";
import { parseISO, format } from "date-fns";

export const ReposItems = ({ data }) => {
  const { name, description, html_url, archived, pushed_at } = data;

  const [dateValues, timeValues] = pushed_at.split("T");
  const timeValueSet = timeValues.replace("Z", "");
  const date = format(parseISO(dateValues), "dd-MM-yyyy");

  return (
    <>
      <ul className="w-full p-4 bg-[#282828] rounded-xl">
        <li className="flex justify-between items-center">
          <div>
            <div className="flex items-center mb-2 flex-row">
              <Book size={24} />
              <h1 className="text-xl pl-2 font-semibold">{name}</h1>
              <span className="border-2 border-gray-200 rounded-full px-4 text-xs ml-4">
                {archived ? "Archived" : "Public"}
              </span>
            </div>
            <p className="text-sm mt-4 md:mt-0">{description}</p>
            <div className="text-xs text-red-500 font-semibold flex flex-col">
              <h4 className="pt-4 pb-2 text-sm">Last Commit</h4>
              <div>
                <span className="p-1 bg-red-600 text-white rounded-md mr-1">
                  Date:
                </span>{" "}
                {date}
                <span className="p-1 bg-red-600 text-white rounded-md ml-4 mr-1">
                  Hour:
                </span>
                {timeValueSet}
              </div>
            </div>
          </div>
          <a href={html_url} target="_blank">
            <ArrowSquareOut size={32} />
          </a>
        </li>
      </ul>
    </>
  );
};
