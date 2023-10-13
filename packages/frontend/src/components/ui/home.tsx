import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height:'93vh', position: "relative"}}>
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
