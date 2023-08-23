import { createClient } from "contentful";
import { useEffect, useState } from "react";
import AboutData from "./AboutData";

const client = createClient({
  space: `${import.meta.env.VITE_ABOUTS_SPACE_ID}`,
  environment: "master",
  accessToken: `${import.meta.env.VITE_ABOUTS_ACCESS_TOKEN}`,
});

const AboutManage = () => {
  const [data, setData] = useState([]);

  const fetch = async function () {
    try {
      const response = await client.getEntries({
        content_type: "manageLandingPageReact",
      });
      const items = response.items;
      const data = items.map((item) => item.fields);

      // alternative
      // const items = response.items.map((item) => item.fields);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <AboutData aboutUsDataCMS={data} />
    </>
  );
};

export default AboutManage;

// export const aboutUsDataCMS = await aboutsData();
