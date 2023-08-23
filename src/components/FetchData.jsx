import { createClient } from "contentful";

const client = createClient({
  space: `${import.meta.env.VITE_ABOUTS_SPACE_ID}`,
  environment: "master",
  accessToken: `${import.meta.env.VITE_ABOUTS_ACCESS_TOKEN}`,
});

const fetchData = async function () {
  try {
    const response = await client.getEntries({
      content_type: "manageLandingPageReact",
    });
    const items = response.items;
    const data = items.map((item) => item.fields);

    // alternative
    // const items = response.items.map((item) => item.fields);
    return data;
  } catch (error) {
    console.error(error);
  }
};

<<<<<<< HEAD
export const aboutUsDataCMS = await fetchData();
=======
const data = await fetchData();
export const aboutUsDataCMS = data;
>>>>>>> b3bd003 (Fixed top level await code)
