import {useMutation} from '@tanstack/react-query';
import {useAtom} from 'jotai';
import {UtilAPI} from '../../../../api/services';
import {ErrorResponseType} from '../../../../api/services/type';
import {ExtendSeatParams} from '../../../../api/services/util/library/libraryAPI.type';
import customShowToast from '../../../../configs/toast';
import useModal from '../../../../hooks/useModal';
import {libraryReservationAtom} from '../../store';
import showLibraryErrorCode from '../../utils/showLibraryErrorCode';
import useUserState from '../../../../hooks/useUserState';
import AnalyticsService from '../../../../services/analytics';

const useLibraryExtend = () => {
  const [{data, refetch}] = useAtom(libraryReservationAtom);
  const {user} = useUserState();
  const [openExtendSheet, closeExtendSheet, ExtendBottomSheet] =
    useModal('BOTTOM_SHEET');

  const extendSeatMutation = useMutation({
    mutationKey: ['reservationSeat'],
    mutationFn: (params: ExtendSeatParams) => UtilAPI.extendSeat(params),
    onError: (error: ErrorResponseType) => {
      showLibraryErrorCode(error.code, 'extend');
      closeExtendSheet();
    },
    onSuccess: async () => {
      await AnalyticsService.logAnalyticsEvent('library_extend_success', {
        userId: user?.id as number,
      }).finally(() => {
        customShowToast('libraryReservationExtendSuccess');
        closeExtendSheet();
        refetch();
      });
    },
  });

  const handleOnPressExtend = () => {
    if (!data.reservationInfo) return;
    extendSeatMutation.mutate({
      roomId: parseInt(data.reservationInfo.seatRoomNumber),
      seatId: parseInt(data.reservationInfo.seatNo),
    });
  };

  return {
    openExtendSheet,
    closeExtendSheet,
    ExtendBottomSheet,
    handleOnPressExtend,
  };
};

export default useLibraryExtend;
