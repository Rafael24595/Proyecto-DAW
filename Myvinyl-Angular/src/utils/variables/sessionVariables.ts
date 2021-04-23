
import { ArtistList } from "src/app/classes/ArtistList";
import { User } from "src/app/classes/User";

export const sesionValues: {artistList:ArtistList, activeUser:User} = {
    artistList: new ArtistList,
    activeUser: User.getUser()
}