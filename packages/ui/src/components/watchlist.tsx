import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function WatchList() {
  return (
    <div className="border border-slate-800
    rounded-t-lg
    bg-white h-full
    ">
      <Tabs defaultValue="activity" className="">
      <div className="flex flex-row ">
          <TabsList>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="activity">
          <div className="flex flex-col">
              <img className="
              hover:border-blue-300 hover:border
              " src="watchlist-activity-1.jpg"/>
              <img className="
              hover:border-blue-300 hover:border
              " src="watchlist-activity-2.jpg"/>
              <img className="
              hover:border-blue-300 hover:border
              " src="watchlist-activity-3.jpg"/>
              <img className="
              hover:border-blue-300 hover:border
              " src="watchlist-activity-4.jpg"/>
            </div>
          </TabsContent>

        <TabsContent value="watchlist">
          <div className="flex flex-col">
                <img className="
                hover:border-blue-300 hover:border
                " src="watchlist-watchlist-1.jpg"/>
                <img className="
                hover:border-blue-300 hover:border
                " src="watchlist-watchlist-2.jpg"/>
                <img className="
                hover:border-blue-300 hover:border
                " src="watchlist-watchlist-3.jpg"/>
                <img className="
                hover:border-blue-300 hover:border
                " src="watchlist-watchlist-4.jpg"/>
              </div>

        </TabsContent>

        </Tabs>
    </div>
  );
}

export default WatchList;
