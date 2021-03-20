import React from "react";
import { useQuery, QueryFunctionContext } from "react-query";
import api from "../services/api";

import { PUBLIC_KEY } from "../constants";
import { getMd5Hash } from "../utils";
import { ApiError, ApiResponse } from "../common/types/Heroes";

export async function fetchHeroes(ctx: QueryFunctionContext<string[]>) {
  const { hash, timestamp } = getMd5Hash();
  const [name, page] = ctx.queryKey;

  const { data } = await api.get<ApiResponse>(
    `/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}&${
      name.length ? `nameStartsWith=${name}` : ""
    }`
  );

  return data;
}

export const useHeroesQuery = (page: number, name: string) =>
  useQuery<ApiResponse, ApiError>([name, page], fetchHeroes, {
    staleTime: 60000 * 60 * 12,
    keepPreviousData: true,
  });
