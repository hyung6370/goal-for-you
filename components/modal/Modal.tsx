import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../home/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  // footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  // footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);

  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return null;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return ( 
    <div>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-neutral-800/70"
      >
        <div
          className="relative w-full h-full mx-auto my-6 md:w-5/6 lg:w-4/6 xl:w-3/5 lg:h-auto md:h-auto xl:h-auto"
        >
          {/* CONTENT */}
          <div
            className={`
             translate
             duration-300
             h-full
             ${showModal ? 'translate-y-0' : 'translate-y-full'}
             ${showModal ? 'opacity-100' : 'opacity-0'}
             `}
          >
            <div
              className="relative flex flex-col w-full h-full bg-white border-0 shadow-lg outline-none rounded-3xl translate lg:h-auto md:h-auto focus:outline-none"
            >
              {/* HEADER */}
              <div
                className="
                 flex items-center p-6
                 rounded-t justify-center relative
                 border-b-[1px]
                "
              >
                <button
                  onClick={handleClose}
                  className="absolute p-1 transition border-0 hover:opacity-70 left-9 "
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-2xl font-semibold font_here">
                  {title}
                </div>
              </div>
              {/* BODY */}
              <div className="relative flex-auto p-6">
                {body}
              </div>
              {/* FOOTER */}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="flex flex-row items-center w-full gap-4 "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSubmit}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Modal;

