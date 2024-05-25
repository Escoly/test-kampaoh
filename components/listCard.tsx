"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";

import { useGlobalState } from "@/app/context/globalStateContext";

export default function ListCard({
  item,
  handleSelectCard,
  isPressable = true,
  isDeletable = false,
}: {
  item: any;
  handleSelectCard?: any;
  isPressable?: boolean;
  isDeletable?: boolean;
}) {
  const { dispatch, state } = useGlobalState();

  const handleDeleteFav = () => {
    const result = state.favs.findIndex((fav) => fav.id === item.id);
    const updatedFavs = [...state.favs];

    updatedFavs.splice(result, 1);
    dispatch({ favs: updatedFavs });
  };

  return (
    <Card
      key={item.id}
      className={`min-h-12 ${isPressable && "hover:scale-105 cursor-pointer"}`}
      isPressable={isPressable}
      onPress={() => handleSelectCard(item.id)}
    >
      <CardBody className="flex flex-row items-center justify-between">
        <p>{`${item.name}, ${item.status}`}</p>
        {isDeletable && <Button onPress={handleDeleteFav}>Eliminar</Button>}
      </CardBody>
    </Card>
  );
}
