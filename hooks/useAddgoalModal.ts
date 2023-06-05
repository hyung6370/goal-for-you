import { create } from 'zustand';

interface AddgoalModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddgoalModal = create<AddgoalModalStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddgoalModal;