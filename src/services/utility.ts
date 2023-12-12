import {UtilAPI} from '../api/services';
import {ErrorResponseType} from '../api/services/type';
import {GetAnnouncementsParams} from '../api/services/util/announcement/announcementAPI.type';
import {LibraryReservationType} from '../api/services/util/library/libraryAPI.type';
import {
  DEFAULT_RESERVATION_STATUS,
  LibraryReservationAtomType,
  ReservationStatusType,
} from '../store/library';

export default class UtilityService {
  static async getLibraryReservationInfo() {
    try {
      const response = await UtilAPI.getLibraryReservation({});
      return response;
    } catch (error) {
      return undefined;
    }
  }

  static async getAnnouncementsInMainScreen(
    origin: GetAnnouncementsParams['origin'],
    size: GetAnnouncementsParams['size'],
  ) {
    try {
      const announcements = await UtilAPI.getAnnouncements({
        origin,
        page: 0,
        size,
      });
      return announcements;
    } catch (error) {
      return undefined;
    }
  }
  static getOutingStatus(
    remainingSeconds: LibraryReservationType['remainingSeconds'],
  ): ReservationStatusType {
    if (remainingSeconds < 30 * 60) return 'OUTING_DEFAULT';
    return 'OUTING_NO_TIME';
  }

  static async getLibraryReservation(): Promise<LibraryReservationAtomType> {
    try {
      let isStudyRoom: boolean = false;
      let status: ReservationStatusType = DEFAULT_RESERVATION_STATUS;

      const response = await UtilAPI.getLibraryReservation({});

      if (response.status === 'STUDY_ROOM') isStudyRoom = true;

      if (response.status !== 'OUTSIDE') status = 'USING';
      else {
        const outingStatus = this.getOutingStatus(response.remainingSeconds);
        status = outingStatus;
      }

      return {
        reservationStatus: status,
        reservationInfo: response,
        isStudyRoom,
      };
    } catch (error) {
      const err = error as ErrorResponseType;

      if (err.status === 500) {
        return {
          reservationStatus: 'NOT_PORTAL_VERIFICATION',
          reservationInfo: null,
          isStudyRoom: null,
        };
      }

      return {
        reservationStatus: 'NOT_USING',
        reservationInfo: null,
        isStudyRoom: null,
      };
    }
  }
}
