export interface Match {
    fixture: {
        id: number;
        date: string;
        status: { short: string; elapsed: number | null };
    };
    league: {
        id: number;
        name: string;
        logo: string;
        round: string;
    };
    teams: {
        home: { name: string; logo: string };
        away: { name: string; logo: string };
    };
    goals: {
        home: number | null;
        away: number | null;
    };
}