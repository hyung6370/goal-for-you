import useAddgoalModal from "@/hooks/useAddgoalModal";
import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import axios from "axios";
import toast from "react-hot-toast";
import Heading from "./Heading";
import { BsCheckLg } from "react-icons/bs";
import Input from "./Input";
import { categories } from "../home/Categories";
import CategoryInput from "./CategoryInput";
import { useRouter } from "next/navigation";
import { DateRange, Range, DateRangePicker } from "react-date-range";
import ListingDate from "./listingDate";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};


const AddgoalModal = () => {
  const router = useRouter();
  const addgoalModal = useAddgoalModal();
  
  const [isLoading, setIsLoading] = useState(false);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      startDate: '',
      endDate: '',
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
    data.startDate = dateRange.startDate;
    data.endDate = dateRange.endDate;
    
    setIsLoading(true);
    
    axios.post('/api/listings', data)
    .then(() => {
        toast.success('새로운 Goal이 생성되었습니다!');
        router.refresh();
        reset();
        addgoalModal.onClose();
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  let bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="hidden sm:block">
        <Heading
          title="목표를 생성해주세요!"
          subtitle="please setting your goal!"
        />
      </div>

        <div>
          <div className="flex flex-row">
            <BsCheckLg size={35}/>
            <h1 className="flex justify-center mt-1 ml-2 text-xl text-purple-600 font_here">Title</h1>
          </div>
          <Input 
              id="title"
              label="Title"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
        </div>
        <div>
          <div className="flex flex-row">
            <BsCheckLg size={35}/>
            <h1 className="flex justify-center mt-1 ml-2 text-xl text-purple-600 font_here">Description</h1>
          </div>
          <Input 
              id="description"
              label="Description"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
        </div>
        
          <div>
            <div className="flex flex-row">
              <BsCheckLg size={35}/>
              <h1 className="flex justify-center mt-1 ml-2 text-xl text-purple-600 font_here">Period</h1>
            </div>
            <div className="flex">
              <ListingDate
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                disabled={isLoading}
                // disabledDates={disabledDates}
              />
              <div className="flex flex-col justify-center mt-4 ml-4">
                <div className="text-purple-600 font_here">
                  Start Date <span className="text-black">{dateRange.startDate && dateRange.startDate.toLocaleDateString()}</span>
                </div>
                
                <div className="mt-3 text-purple-600 font_here">
                  End Date <span className="text-black">{dateRange.endDate && dateRange.endDate.toLocaleDateString()}</span>
                </div>
              </div>
              
            </div>
          </div>

          <div className="">
            <div className="flex flex-row">
              <BsCheckLg size={35}/>
              <h1 className="flex justify-center mt-1 ml-2 text-xl text-purple-600 font_here">Category</h1>
            </div>
            
            <div 
              className="
                mt-7
                grid 
                grid-cols-4
                sm:grid-cols-4
                md:grid-cols-4 
                lg:grid-cols-4 
                xl:grid-cols-4 
                2xl:grid-cols-4
                gap-4
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