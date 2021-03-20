import React from "react";
import { useQuery, QueryFunctionContext } from "react-query";
import api from "../services/api";

import { PUBLIC_KEY } from "../constants";
import { getMd5Hash } from "../utils";
import { ApiError, ApiResponse } from "../common/types/Heroes";

export async function fetchHeroes(ctx: QueryFunctionContext<string[]>) {
  const { hash, timestamp } = getMd5Hash();
  const [name, orderBy, offSet] = ctx.queryKey;

  const { data } = await api.get<ApiResponse>(
    `/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}&orderBy=${orderBy}&offset=${offSet}&${
      name.length ? `nameStartsWith=${name}` : ""
    }`
  );

  return data;
}

export const useHeroesQuery = (name: string, orderBy: string, offSet: number) =>
  useQuery<ApiResponse, ApiError>([name, orderBy, offSet], fetchHeroes, {
    staleTime: 60000 * 60 * 12,
    keepPreviousData: true,
  });
