import SectionTitle from "../../components/shared/SectionTitle";

const AddContest = () => {
  const handleAddFood = (event) => {
    event.preventDefault();
  };

  return (
    <div className=" px-10">
      <div className="py-10">
        <SectionTitle title="Add a new Contest " ></SectionTitle>
      </div>
      <form onSubmit={handleAddFood} className="max-w-7xl mx-auto  ">
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
                className="input input-bordered w-full"
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
                type="text"
                name="description"
                placeholder="Product Image"
                className="input input-bordered w-full"
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
                type="text"
                name="money"
                placeholder="Enter price money ammount "
                className="input input-bordered w-full"
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
            >
             <option value="Art">Art</option>
              <option value="Coding">Coding</option>
              <option value="Design">Design</option>
              <option value="Writing">Writing</option>
              <option value="Photography">Photography</option>
              <option value="Innovation">Innovation</option>
              <option value="Music">Music</option>
              <option value="Film">Film</option>
              <option value="Gaming">Gaming</option>
              <option value="Cooking">Cooking</option>
            </select>
          </div>

          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text w-full text-center">
                Food Description
              </span>
            </label>
            <textarea
             style={{ boxShadow: "9px 6px 10px 1px #000000" }}
              placeholder="Contest Description"
              className="input input-bordered w-full"
              name="description"
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
              name="description"
            ></textarea>
          </div>

          
        </div>

        <input
          type="submit"
          value="Add product"
          className="btn bg-black hover:bg-[#040904] btn-block text-slate-300" 
        />
      </form>
    </div>
  );
};

export default AddContest;
