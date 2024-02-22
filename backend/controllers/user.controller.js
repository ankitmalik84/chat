import User from "../models/user.model.js";
export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id; // Get the id of the user who is currently logged in
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password"); // Get all the users except the logged in user and if you want to send message yourself then remove this condition _id: { $ne: loggedInUserId } from the find query and also remove the select("-password") to get the password of the user

    res.status(200).json({ filteredUsers });
  } catch (error) {
    console.log("Error in getUserForSidebar: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
