import { RootState } from '../..';

export const selectModalStatus = (state: RootState) => state.modal.isOpen;
