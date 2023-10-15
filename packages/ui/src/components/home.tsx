import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Home() {
  return (
    <div 
    className="
    border border-slate-800
    rounded-t-lg
    bg-white h-full
    ">
      <Tabs defaultValue="you" className="">

        <div className="flex flex-row ">
          <TabsList>
            <TabsTrigger value="you">You</TabsTrigger>
            <TabsTrigger value="yourkeys">Your Keys</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="you">

          <div className="flex flex-col">
            <img className="
            hover:border-blue-300 hover:border
            " src="home-you-1.jpg"/>
            <img className="
            hover:border-blue-300 hover:border
            " src="home-you-2.jpg"/>
            <img className="
            hover:border-blue-300 hover:border
            " src="home-you-3.jpg"/>
            <img className="
            hover:border-blue-300 hover:border
            " src="home-you-4.jpg"/>
          </div>
        
        </TabsContent>

        <TabsContent value="yourkeys"></TabsContent>

        <TabsContent value="friends"></TabsContent>
      </Tabs>
    </div>
  );
}

export default Home;
