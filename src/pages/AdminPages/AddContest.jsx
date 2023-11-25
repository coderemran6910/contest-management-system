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
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* image , Quantity */}
        <div className="md:flex mb-8 gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Product Image"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* Category, Desc */}
        <div className="md:flex mb-8 gap-3  ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Choose a Type</span>
            </label>
            <select
              name="category"
              type="text"
              className="select select-bordered w-full "
            >
              <option value="pizza">pizza</option>
              <option value="meat">meat</option>
              <option value="salad">salad</option>
              <option value="rice">rice</option>
              <option value="sushi">sushi</option>
              <option value="burger ">burger</option>
              <option value="indian ">indian</option>
              <option value="sandwich ">sandwich</option>
              <option value="soup ">soup</option>
            </select>
          </div>

          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text w-full text-center">
                Food Description
              </span>
            </label>
            <textarea
              placeholder="Food Description"
              className="input input-bordered w-full"
              name="description"
            ></textarea>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Origin(country)</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="country"
                placeholder="Food Origin"
                className="input input-bordered w-full"
              />
            </label>
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
