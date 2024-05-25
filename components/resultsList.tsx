"use client";

import { Fragment, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import DetailCard from "./detailCard";
import ListCard from "./listCard";

import { useGlobalState } from "@/app/context/globalStateContext";
import getOwners from "@/api/route";

export default function ResultsList({
  params,
}: {
  params: { name: string; perPage: string };
}) {
  const { dispatch, state } = useGlobalState();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selectedCard, setSelectedCard] = useState<any>();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const [currentListContent, setCurrentListConent] = useState(
    10 || (params.perPage && parseInt(params.perPage))
  );
  const handleGetOwners = async () => {
    const data = await getOwners(params.name, params.perPage);

    if (data.length === currentData.length) {
      setCurrentListConent(currentData.length);
    }
    setCurrentData(data);
    dispatch({ cats: state.cats + 1 });
  };

  useEffect(() => {
    handleGetOwners();
  }, [params]);

  useEffect(() => {
    setCurrentListConent(10);
  }, [params.name]);

  useEffect(() => {
    if (scrollPosition === 100) {
      setCurrentListConent(currentListContent + 10);
    }
  }, [scrollPosition]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (currentListContent) {
      params.set("per_page", currentListContent.toString());
    } else {
      params.delete("per_page");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [currentListContent]);

  const handleSelectCard = (id: string) => {
    let selectedData = {};

    currentData.forEach((item: any) => {
      if (item.id === id) {
        selectedData = { ...item };
      }
    });
    setSelectedCard(selectedData);
  };

  const handleScrollEvent = (e: any) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );

    setScrollPosition(position);
  };

  return (
    <section className="w-full min-w-[62rem] m-auto">
      {currentData.length > 0 ? (
        <div className="flex flex-row justify-center gap-4 w-full">
          <div
            className={`flex flex-col min-w-[30rem] gap-2 max-h-[30rem] px-4 py-2 ${
              currentData.length < 10 ? "overflow-y-auto" : "overflow-y-scroll"
            }`}
            onScroll={handleScrollEvent}
          >
            {currentData.map((item: any) => {
              return (
                <ListCard
                  key={item.id}
                  handleSelectCard={handleSelectCard}
                  item={item}
                />
              );
            })}
          </div>
          {selectedCard ? (
            <div className="min-w-[30rem]">
              <DetailCard selectedCard={selectedCard} />
            </div>
          ) : (
            <div className="min-w-[30rem]" />
          )}
        </div>
      ) : (
        <Fragment />
      )}
    </section>
  );
}
