"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <div className="w-4/5">
        <div className="bg-slate-400 w-full h-[300px]"></div>
        <div className="flex flex-wrap justify-between my-10">
          <Card className="my-4 w-60 h-80 flex flex-col justify-start items-center">
            <div className="w-full h-[200px] bg-slate-500 rounded-lg"></div>
            <CardTitle className="text-lg p-5">Card Title</CardTitle>
            <div className="flex w-full justify-between px-5"><Button>Button</Button>
              <Button variant="outline">Button</Button>
            </div>
            
          </Card>
            <Card className="my-4 w-60 h-80 flex flex-col justify-start items-center">
            <div className="w-full h-[200px] bg-slate-500 rounded-lg"></div>
            <CardTitle className="text-lg p-5">Card Title</CardTitle>
            <div className="flex w-full justify-between px-5"><Button>Button</Button>
              <Button variant="outline">Button</Button>
            </div>
            
          </Card>
            <Card className="my-4 w-60 h-80 flex flex-col justify-start items-center">
            <div className="w-full h-[200px] bg-slate-500 rounded-lg"></div>
            <CardTitle className="text-lg p-5">Card Title</CardTitle>
            <div className="flex w-full justify-between px-5"><Button>Button</Button>
              <Button variant="outline">Button</Button>
            </div>
            
          </Card>
            <Card className="my-4 w-60 h-80 flex flex-col justify-start items-center">
            <div className="w-full h-[200px] bg-slate-500 rounded-lg"></div>
            <CardTitle className="text-lg p-5">Card Title</CardTitle>
            <div className="flex w-full justify-between px-5"><Button>Button</Button>
              <Button variant="outline">Button</Button>
            </div>
            
          </Card>
          
        </div>
      </div>
    </main>
  );
}
