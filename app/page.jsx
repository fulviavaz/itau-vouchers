"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* Ajuste para largura fixa e centralização */}
      <div className="w-full max-w-[330px]">
        <div className="bg-slate-400 w-full h-[400px] rounded-b-2xl flex items-end justify-center  bg-[url('/bgimg.jpg')] bg-cover bg-center">
          <Image src="/Logo kart italia.png" alt="logo" width={90} height={35} className="mb-4"  />
        </div>
        <div className="flex flex-col justify-between my-10">
          <h1 className="text-3xl font-bold">Kart Itália</h1>
          <h2 className="text-2xl font-bold">Desconto de 20% no pix para grupos de 5 pessoas ou 10% unitário para paramento no pix</h2>
          <p className="text-base mt-4 mb-4">
            Apresente o Voucher no momento do seu agendamento e direto na unidade.
          </p>
            <p className="text-base mt-4 mb-4">
            Cliente clube tem 10% de desconto no agendamento individual sendo pagamento no pix ou no Grupo
            de 5 pessoas desconto de 20%.
          </p>
            <p className="text-base mt-4 mb-4">
            Localizado às margens da Rodovia Dom Pedro I, altura do KM 124 Norte na cidade de Valinhos, o Itália Kart & Eventos 
            proporciona muito entretenimento com uma boa dose de emoção, adrenalina, aventura e descontração.
          </p>
            <p className="text-base mt-4 mb-4 font-bold">
            Rod. Dom Pedro I, Km 124 Norte - Valinhos/SP
            Contato: (19) 98446-1515
          </p>
          <Button>Download</Button>
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
