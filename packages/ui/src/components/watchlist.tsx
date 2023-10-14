import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function WatchList() {
  return (
    <div className="border border-slate-800
    rounded-t-lg
    bg-white h-full
    ">
      <Tabs defaultValue="WatchList" className="">
        <TabsList>
          <TabsTrigger value="WatchList">WatchList</TabsTrigger>
          <TabsTrigger value="pass">pass</TabsTrigger>
          <TabsTrigger value="myTeam">myTeam</TabsTrigger>
        </TabsList>

        <TabsContent value="WatchList">This is WatchList</TabsContent>

        <TabsContent value="pass">Change your pass here.</TabsContent>

        <TabsContent value="myTeam">Change your myTeam here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default WatchList;
