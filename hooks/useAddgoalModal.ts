import { create } from 'zustand';

interface AddgoalModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddgoalModal = create<AddgoalModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddgoalModal;