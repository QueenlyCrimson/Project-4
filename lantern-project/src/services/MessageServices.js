import Client from "./api";

export const GetChatrooms = async () => {
  try {
    const res = await Client.get("/post/get_posts");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CreatePost = async (data) => {
  try {
    const res = await Client.post("post/create_posts", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CreateComment = async (data) => {
  try {
    const res = await Client.post("comment/create_comment", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
