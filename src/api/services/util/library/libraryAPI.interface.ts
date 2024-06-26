import {ServiceFunc} from '../../type';
import * as Type from './libraryAPI.type';

export default interface LibraryService {
  getAllLibraryStatus: ServiceFunc<
    Type.GetAllLibraryStatusParams,
    Type.GetAllLibraryStatusRes
  >;
  getLibraryRoomStatus: ServiceFunc<
    Type.GetLibraryRoomStatusParams,
    Type.GetLibraryRoomStatusRes
  >;
  getLibraryReservation: ServiceFunc<
    Type.GetLibraryReservationParams,
    Type.GetLibraryReservationRes
  >;
  getLibraryRanking: ServiceFunc<
    Type.GetLibraryRankingParams,
    Type.GetLibraryRankingRes
  >;
  getMyLibraryRanking: ServiceFunc<
    Type.GetMyLibraryRankingParams,
    Type.GetMyLibraryRankingRes
  >;
  getSeatList: ServiceFunc<Type.GetSeatListParams, Type.GetSeatListRes>;
  reservationSeat: ServiceFunc<
    Type.ReservationSeatParams,
    Type.ReservationSeatRes
  >;
  extendSeat: ServiceFunc<Type.ExtendSeatParams, Type.ExtendSeatRes>;
  returnSeat: ServiceFunc<Type.ReturnSeatParams, Type.ReturnSeatRes>;
}
