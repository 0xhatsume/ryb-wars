import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";

function Profile() {
  return (
    <div className="border border-slate-800
    rounded-t-lg
    bg-white h-full
    py-2 px-2
    flex flex-col justify-start items-center
    ">
      <div className="">
        <div className="flex flex-col w-full">
          
          <div className="flex flex-row justify-start items-center">
            <span
          className="mx-5 my-2"
          >Profile</span></div>

          <div className="flex flex-row w-full
          justify-start items-center
          my-2 mb-7
          ">

            <Avatar className="mx-4 w-[80px] h-[80px]">
              <AvatarImage src="profile-left-1.jpg" />
              <AvatarFallback>CN</AvatarFallback> 
            </Avatar>

            <div className="flex flex-col ml-auto mr-9
            text-right
            ">
              <span className="flex flex-row items-center"><span className="mx-1"><img src="profile-redteam.jpg"/></span><span>Red Team || Class: Berserker</span></span>
              <span>Attack:420 || Defence: 69</span>
              <span>XP: 9000 || Inventory:20 Keys</span>
            </div>
          </div>
        </div>
      </div>

      <img className="h-[150px]" src="profile-aura.jpg"/>
      <img className="h-[150px]" src="profile-levelbar.jpg"/>
      <img className="h-[150px]" src="profile-achieves.jpg"/>
    </div>
  );
}

export default Profile;
