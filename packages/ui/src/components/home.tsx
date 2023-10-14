import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Home() {
  return (
    <div 
    className="
    border border-slate-800
    rounded-t-lg
    bg-white h-full
    ">
      <Tabs defaultValue="mySelf" className="">
        <TabsList>
          <TabsTrigger value="mySelf">mySelf</TabsTrigger>
          <TabsTrigger value="myKey">myKey</TabsTrigger>
          <TabsTrigger value="myTeam">myTeam</TabsTrigger>
        </TabsList>

        <TabsContent value="mySelf">This is mySelf</TabsContent>

        <TabsContent value="myKey">Change your myKey here.</TabsContent>

        <TabsContent value="myTeam">Change your myTeam here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default Home;
