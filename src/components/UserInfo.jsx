import React from "react";

export const UserInfo = (props) => {
  return (
    <div className="flex flex-col items-center">
      <img
        /*src={props.url}*/ 
        className="w-[100px] rounded-full"
        src="https://avatars.githubusercontent.com/u/81888958?v=4"
        alt={props.alt}
      />
      <h1 className="font-semibold text-2xl">{/*props?.name*/}Uildes Demétrio</h1>
      <h2 /*onClick={props.perfil}*/ className="pb-4">{/*props?.login*/}@uildez</h2>
      <p className="w-3/4 text-center text-sm">{/*props?.bio*/}Web Dev with experience in UI/UX Design - Freelancer since 2018 Student of Internet System 🚀</p>

      <div className="flex gap-8 pt-8 w-full justify-center">
        <div className="text-center" onClick={() => handleOnClick("/repos")}>
          <h1 className="text-2xl font-semibold">{/*props?.repos*/}23</h1>
          <h2>Repositórios</h2>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-semibold">{/*props?.followers*/}23</h1>
          <h2>Followers</h2>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-semibold">{/*props?.following*/}23</h1>
          <h2>Following</h2>
        </div>
      </div>
    </div>
  );
};
