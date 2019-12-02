export class GameEvent{
    _id: string;
    Title: string;
    GameType: string;
    LocationName: string; // new 
    Location: string;
    Date: Date;
    Time: string;
    Restrictions: string;
    ReqPlayers: number;
    MaxPlayers: number;
    CurrentPlayers: Array<any[]>;
    DistFromUser: number; // new
}