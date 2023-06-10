import useAddgoalModal from "@/hooks/useAddgoalModal";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import axios from "axios";
import toast from "react-hot-toast";
import Heading from "./Heading";
import { BsCheckLg } from "react-icons/bs";
import Input from "./Input";
import { categories } from "../home/Categories";
import CategoryInput from "./CategoryInput";

const AddgoalModal = () => {
  const addgoalModal = useAddgoalModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      category: ''
    }
  });

  const category = watch('category');
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }


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
        title="목표를 생성해주세요!"
        subtitle="please setting your goal!"
      />

        <div>
          <div className="flex flex-row">
            <BsCheckLg size={40}/>
            <h1 className="flex justify-center mt-1 ml-2 text-2xl text-purple-600 font_here">Title</h1>
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
            <h1 className="flex justify-center mt-1 ml-2 text-2xl text-purple-600 font_here">Description</h1>
          </div>
          <Input 
              id="goalDescription"
              label="Description"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
        </div>
        <div>
          <div className="flex flex-row">
            <BsCheckLg size={40}/>
            <h1 className="flex justify-center mt-1 ml-2 text-2xl text-purple-600 font_here">Period</h1>
          </div>
          
        </div>
        <div>
          <div className="flex flex-row">
            <BsCheckLg size={40}/>
            <h1 className="flex justify-center mt-1 ml-2 text-2xl text-purple-600 font_here">Category</h1>
          </div>
          
        </div>
        <div 
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => 
                setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
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