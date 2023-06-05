import useAddgoalModal from "@/hooks/useAddgoalModal";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import axios from "axios";
import toast from "react-hot-toast";
import Heading from "./Heading";


const AddgoalModal = () => {
  const addgoalModal = useAddgoalModal();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/addgoal', data)
      .then(() => {
        addgoalModal.onClose();
      })
      .catch((error) => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="목표를 추가해주세요!"
        subtitle="please setting your goal!"
      />
    </div>
  )

  return ( 
    <div>
      <Modal 
        disabled={isLoading}
        isOpen={addgoalModal.isOpen}
        title="Add Goal!"
        actionLabel="Complete"
        onClose={addgoalModal.onClose}
        // onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
      />
    </div>
   );
}
 
export default AddgoalModal;