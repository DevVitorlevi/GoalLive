import axios from "axios";

const API_KEY = '9c08267e4c40fc635cb4e89303d336a0';

export const apiFootball = axios.create({
    baseURL: "https://v3.football.api-sports.io/",
    headers: {
        "x-apisports-key": API_KEY || "",
    },
});

export const getFixturesByDate = (date: string, leagueIds: number[]) => {
    return apiFootball.get("/fixtures", {
        params: {
            date,
            league: leagueIds.join(","),
        },
    });
};

export const getStandingsByLeague = (leagueId: number, season: number) => {
    return apiFootball.get("/standings", {
        params: {
            league: leagueId,
            season,
        },
    });
};
