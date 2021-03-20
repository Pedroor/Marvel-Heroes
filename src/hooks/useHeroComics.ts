import React from "react";
import { useQuery, QueryFunctionContext } from "react-query";
import api from "../services/api";

import { PUBLIC_KEY } from "../constants";
import { getMd5Hash } from "../utils";
import { ApiError, ApiResponse } from "../common/types/Comics";

export async function fetchHeroComics(ctx: QueryFunctionContext<string[]>) {
  const { hash, timestamp } = getMd5Hash();
  const [id, page] = ctx.queryKey;

  const { data } = await api.get<ApiResponse>(
    `/characters/${id}/comics?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`
  );

  return data;
}

export const useHeroComicsQuery = (page: number, id: number) =>
  useQuery<ApiResponse, ApiError>([id, page], fetchHeroComics, {
    staleTime: 60000 * 60 * 12,
    keepPreviousData: true,
  });
