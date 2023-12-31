import { useForm } from "react-hook-form";
import SectionTitle from "../../components/shared/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const AddContest = () => {
  const axiosPublic = useAxiosPublic()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    const postData = {
      ...data,
      status : "pending"
    }
    axiosPublic.post("/contests", postData)
    .then(()=>{
      toast.success("Contest added successfully")
    })
    .catch((err)=>{
      toast.error(err.message)
    })
  };




  return (
    <div className=" px-10">
      <h2 className="text-3xl font-bold text-center">Welcome  to your Admin Dashboard </h2>
      <div className="py-10">
        <SectionTitle title="Add a new Contest " ></SectionTitle>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-7xl mx-auto  ">
        {/* Name and Price */}
        <div className="md:flex mb-8 gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Contest Name</span>
            </label>
            <label className="input-group">
              <input
               style={{ boxShadow: "9px 6px 10px 1px #000000" }}
                type="text"
                name="name"
                placeholder="Contest Name"
                className="input input-bordered w-full "
                {...register("name")}
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image url</span>
            </label>
            <label className="input-group">
              <input
               style={{ boxShadow: "9px 6px 10px 1px #000000" }}
                type="text"
                name="image"
                placeholder="Image Url"
                className="input input-bordered w-full"
                {...register("image")}
              />
            </label>
          </div>
        </div>

        {/* image , Quantity */}
        <div className="md:flex mb-8 gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Contest Price </span>
            </label>
            <label className="input-group">
              <input
               style={{ boxShadow: "9px 6px 10px 1px #000000" }}
                type="number"
                name="price"
                placeholder="Product Image"
                className="input input-bordered w-full"
                {...register("price")}
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Contest Prize Money</span>
            </label>
            <label className="input-group">
              <input
               style={{ boxShadow: "9px 6px 10px 1px #000000" }}
                type="number"
                name="prize"
                placeholder="Enter price money ammount "
                className="input input-bordered w-full"
                {...register("prize")}
                
              />
            </label>
          </div>
        </div>

        {/* Category, Desc */}
        <div className="md:flex mb-8 gap-3  ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Contest Type</span>
            </label>
            <select
             style={{ boxShadow: "9px 6px 10px 1px #000000" }}
              name="type"
              type="text"
              className="select select-bordered w-full "
              {...register("type")}

            >
             <option value="Art">Business</option>
              <option value="Coding">Medical</option>
              <option value="Design">Article</option>
              <option value="Writing">Writing</option>
              <option value="Photography">Writing</option>
              <option value="Innovation">Gaming</option>
            </select>
          </div>

          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text w-full text-center">
                Contest Description
              </span>
            </label>
            <textarea
             style={{ boxShadow: "9px 6px 10px 1px #000000" }}
              placeholder="Contest Description"
              className="input input-bordered w-full"
              name="description"
              {...register("description")}
            ></textarea>
          </div>


          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text w-full text-center">
              Task Submission text instruction
              </span>
            </label>
            <textarea
             style={{ boxShadow: "9px 6px 10px 1px #000000" }}
              placeholder="text instruction"
              className="input input-bordered w-full"
              name="instruction"
              {...register("instruction")}
            ></textarea>
          </div>

          
        </div>

        <div>
        <input
          type="submit"
          value="Add Contest"
          className="btn bg-black hover:bg-[#040904] btn-block text-slate-300" 
        />
        </div>
      </form>
    </div>
  );
};

export default AddContest;
