export class GameEvent{
    _id: string;
    Owner_id: string;
    Owner_UserName: string;
    Title: string;
    GameType: string;
    LocationName: string;
    Location: string;
    Date: Date;
    Time: string;
    Restrictions: string;
    ReqPlayers: number;
    MaxPlayers: number;
    CurrentPlayers: Array<any[]>;
    DistFromUser: number; 
}
