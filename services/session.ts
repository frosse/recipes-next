import { getSession } from "next-auth/client";

const handleSession = async context => {
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }
  return session;
};

export default { handleSession };
