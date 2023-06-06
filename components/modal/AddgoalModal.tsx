import useAddgoalModal from "@/hooks/useAddgoalModal";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import axios from "axios";
import toast from "react-hot-toast";
import Heading from "./Heading";
import { BsCheckLg } from "react-icons/bs";
import Input from "./Input";


const AddgoalModal = () => {
  const addgoalModal = useAddgoalModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      goalName: '',
      
    }
  })

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

        <div>
          <div className="flex flex-row">
            <BsCheckLg size={40}/>
            <h1 className="flex justify-center mt-1 ml-2 text-2xl text-purple-600 font_here">Goal's title</h1>
          </div>
          <Input 
              id="goalName"
              label="title name"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
        </div>
        <div>
          <div className="flex flex-row">
            <BsCheckLg size={40}/>
            <h1 className="flex justify-center mt-1 ml-2 text-2xl text-purple-600 font_here">Goal's period</h1>
          </div>
          
        </div>
        <div>
          <div className="flex flex-row">
            <BsCheckLg size={40}/>
            <h1 className="flex justify-center mt-1 ml-2 text-2xl text-purple-600 font_here">Goal's categori</h1>
          </div>
          
        </div>
        
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
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
      />
    </div>
   );
}
 
export default AddgoalModal;