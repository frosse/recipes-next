import AuthenticationService from "./../../services/auth";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(403).end();
  }
  const { password } = req.body;
  if (await AuthenticationService.validatePassword(password)) {
    console.log("auth ok");
    res.status(200).json({ auth: "ok" });
  }
  console.log("auth not ok");
  res.status(401).end();
};
