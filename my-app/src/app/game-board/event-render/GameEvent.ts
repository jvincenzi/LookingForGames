export class GameEvent{
    _id: string;
    Title: string;
    GameType: string;
    LocationName: string;
    Location: string;
    Date: Date;
    Restrictions: string;
    ReqPlayers: number;
    MaxPlayers: number;
    CurrentPlayers: Array<any[]>;
    DistFromUser: number; 
}
