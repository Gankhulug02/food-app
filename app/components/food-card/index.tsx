import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const FoodCard = () => {
  return (
    <div className="w-full">
      <Image
        src="/test/burger.jpeg"
        alt="burger"
        width={200}
        height={200}
        loading="lazy"
        className="w-full h-auto rounded-lg"
      />
      <div className="flex flex-col gap-2 p-2">
        <h3 className="text-lg text-text font-bold">Burger</h3>
        <p className="text-sm text-text-muted">100 calories</p>
        <Button className="w-full text-text-white font-bold bg-primary">
          Сагслах
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;
