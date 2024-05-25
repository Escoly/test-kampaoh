"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

import { useGlobalState } from "@/app/context/globalStateContext";

export default function DetailCard({ selectedCard }: { selectedCard: any }) {
  const { dispatch, state } = useGlobalState();
  const handleAddToFavorite = () => {
    const result = state.favs.findIndex((item) => item.id === selectedCard.id);

    if (result === -1) {
      dispatch({ favs: [...state.favs, { ...selectedCard }] });
    } else {
      const updatedFavs = [...state.favs];

      updatedFavs.splice(result, 1);
      dispatch({ favs: updatedFavs });
    }
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row justify-between">
        <p className="mr-2 text-lg underline underline-offset-8">{`${selectedCard.name}`}</p>
        <p className="text-blue-500">{`  ${selectedCard.status}`}</p>
      </CardHeader>
      <CardBody>
        <p>{`Genero: ${selectedCard.gender}`}</p>
        <p>{`Email: ${selectedCard.email}`}</p>
      </CardBody>
      <CardFooter className="justify-center">
        <Button
          className="bg-blue-600 text-white"
          onPress={handleAddToFavorite}
        >
          {state.favs.findIndex((fav) => fav.id === selectedCard.id) !== -1
            ? "Eliminar de Favoritos"
            : "Añadir a Favoritos"}
        </Button>
      </CardFooter>
    </Card>
  );
}
