"use client";
import { Input } from "@nextui-org/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { SearchIcon } from "./icons";
export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    const perPageDefault = 10;

    if (value.length >= 2) {
      params.set("name", value);
      params.set("per_page", perPageDefault.toString());
    } else {
      params.delete("name");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <Input
        defaultValue={searchParams.get("name")?.toString()}
        endContent={<SearchIcon />}
        placeholder={"Buscar..."}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
