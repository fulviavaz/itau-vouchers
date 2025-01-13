"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-4/5">
        <div className="bg-slate-400 w-full h-[400px] rounded-b-2xl flex items-end justify-center">
          <Button className="mb-4">Botão</Button>
        </div>
        <div className="flex flex-col justify-between my-10">
          <h1 className="text-3xl font-bold">Título</h1>
          <h2 className="text-2xl font-bold">Subtítulo</h2>
          <p className='text-lg mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ipsum, natus quam nulla enim facilis ad molestiae minus, veritatis, unde assumenda ea voluptates quae! Vitae quam ea nisi laboriosam vero?</p>
          <Button >Botão</Button>
          
        </div>
      </div>
      <footer className="w-full bg-black">
        <div className="text-center py-5">
          <p className="text-white">© 2025 Itau Vouchers</p>
        </div>
      </footer>
    </main>
  );
}
