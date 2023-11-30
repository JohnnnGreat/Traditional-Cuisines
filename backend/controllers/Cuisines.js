const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const Cuisines = require("../models/cuisines");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const upload = multer({ dest: "uploads/" });

const GetCuisine = async (req, res) => {
  const { id } = req.params;

  try {
    const cuisine = await Cuisine.find({ id });
    res.status(200).json({ message: "Cuisine Fetched Succesfully", cuisine });
  } catch (error) {}
};

const GetCuisines = async (req, res) => {
  try {
    const { id } = req.params;
    const cuisines = await Cuisines.find({ user: id });
    res.status(200).json({ message: "Cuisines Fetched Succesfully", cuisines });
  } catch (error) {
    console.log(error);
  }
};

const getCuisinesCat = (req, res) => {
  try {
    const cuisinesCategory = Cuisines.find;
  } catch (error) {}
};

const AddCuisine = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
    });

    const { secure_url } = result;
    console.log(req.body);
    const addedCuisines = await Cuisines.create({
      ...req.body,
      imageUrl: secure_url,
    });

    console.log(addedCuisines);
    res
      .status(200)
      .json({ message: "Form Received Succesfully", file: secure_url });
  } catch (error) {
    console.log(error);
  }
};

const UpdateCuisine = async (req, res, next) => {
  const { id } = req.params;
  console.log(req.body);

  try {
    const cuisine = await Cuisines.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({ success: true, message: "Updated Succesfully" });
  } catch (error) {
    next(error);
  }
};

const VerifyCuisine = async (req, res) => {
  const { id } = req.params;

  try {
    const cuisines = await Cuisines.findByIdAndUpdate(
      id,
      { approved: true },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Item Approved Successfuly", success: true });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

const GetApprovedCuisines = async (req, res) => {
  try {
    const cuisines = await Cuisines.find({ approved: true });
    console.log(cuisines);
    res
      .status(200)
      .json({ cuisines: cuisines, messgae: "Fetched Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error });
  }
};

const deleteCuisines = (req, res) => {};

const GetUnapprovedCuisines = async (req, res) => {
  try {
    const cuisines = await Cuisines.find({ approved: false });

    res
      .status(200)
      .json({ message: "Unapproved Cuisines Fetched Succesfully", cuisines });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const GetAllProfileCuisines = async (req, res) => {
  try {
    const { id } = req.params;

    const cuisines = await Cuisines.find({ user: id });
    res
      .status(200)
      .json({ message: "Retrieved Succesfully", cuisines: cuisines });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  AddCuisine,
  GetCuisines,
  GetUnapprovedCuisines,
  VerifyCuisine,
  GetAllProfileCuisines,
  GetCuisine,
  GetApprovedCuisines,
  UpdateCuisine,
};
