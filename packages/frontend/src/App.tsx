import './App.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Home from './components/ui/home';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
      <Tabs defaultValue="home" className="">
        <TabsContent value="home">
          <Home />
        </TabsContent>

        <TabsContent value="profile">
          Change your password here.
        </TabsContent>

        <TabsContent value="worldWars">
          Change your password here.
        </TabsContent>

        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="otherTeam">otherTeam</TabsTrigger>
          <TabsTrigger value="worldWars">World Wars</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

export default App;
