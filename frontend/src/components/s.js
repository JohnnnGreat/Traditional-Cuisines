{
  showForm && (
    <div className="form-container">
      <div
        className="closebtn"
        onClick={() => {
          setShowForm(false);
        }}
      >
        <IoClose size={"40px"} color="fff" />
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit(isEdit ? editHandler : submitHandler)}
      >
        <div className="time-cat">
          <div className="form-content">
            <label htmlFor="name">Food Name</label>
            <input
              id="name"
              type="text"
              placeholder="e.g Rice, Beans"
              {...register("name", {
                required: {
                  value: true,
                  message: " Enter a valid Name",
                },
              })}
            />
          </div>
          <div className="form-content">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              {...register("description", {
                required: {
                  value: true,
                  message: " Enter a valid Name",
                },
              })}
              placeholder="add a description"
            />
          </div>
        </div>

        <div className="form-content">
          <label htmlFor="method">Method</label>
          <input
            id="method"
            type="text"
            {...register("method", {
              required: {
                value: true,
                message: " Enter a valid Name",
              },
            })}
            placeholder="Parboil the rice, fry the vegetables and meat........"
          />
        </div>

        <div className="time-cat">
          {" "}
          <div className="form-content">
            <label htmlFor="method">Nutrition</label>
            <input
              id="method"
              type="text"
              {...register("nutrition", {
                required: {
                  value: true,
                  message: " Enter a valid Name",
                },
              })}
              placeholder="e.g. Calories: 333, Protein: 9.9g, Carbs: 53.4g, Fat: 9.4g"
            />
          </div>{" "}
          <div className="form-content">
            <label htmlFor="ingredient">Ingredients</label>
            <input
              id="ingredient"
              type="text"
              {...register("ingredients", {
                required: {
                  value: true,
                  message: " Enter a valid Name",
                },
              })}
              placeholder="e.g. Calories: 333, Protein: 9.9g, Carbs: 53.4g, Fat: 9.4g"
            />
          </div>
        </div>

        <div className="form-content">
          <label className="add-image" htmlFor="fileUpload">
            Upload Image
          </label>
          <input
            id="fileUpload"
            type="file"
            onChange={handleFile}
            accept="image/*"
            style={{ display: "none" }}
            placeholder="45"
          />
          {fileName && <p className="file_name">{fileName}</p>}
          {/* <img src={URL.createObjectURL(file)} /> */}
        </div>
        <div className="time-cat">
          <div className="form-content">
            <label htmlFor="method">Category</label>
            <input
              id="method"
              {...register("category", {
                required: {
                  value: true,
                  message: " Enter a valid Name",
                },
              })}
              type="text"
              placeholder="Rice"
            />
          </div>
          <div className="form-content">
            <label htmlFor="method">Time</label>
            <input
              id="method"
              {...register("time", {
                required: {
                  value: true,
                  message: " Enter a valid Name",
                },
              })}
              type="text"
              placeholder="45"
            />
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
