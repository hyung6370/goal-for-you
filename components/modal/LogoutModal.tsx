import useLogoutModal from "@/hooks/useLogoutModal";
import { useState } from "react";
import Modal from "./Modal";
import { FieldValues, useForm } from "react-hook-form";
import { getSession, signOut } from "next-auth/react";

const LogoutModal = () => {
  const logoutModal = useLogoutModal();
  const [isLoading, setIsLoading] = useState(false);

  const bodyContent = (
    <div className="flex justify-center text-neutral-800 font_kor_medium">
      정말 로그아웃 하시겠습니까?
    </div>
  )

  return ( 
    <div>
      <Modal
        disabled={isLoading}
        isOpen={logoutModal.isOpen}
        title="Logout"
        actionLabel="로그아웃"
        onClose={logoutModal.onClose}
        onSubmit={() => signOut()}
        body={bodyContent}
      />
    </div>
   );
}
 
export default LogoutModal;