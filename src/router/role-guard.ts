/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
  console.log(to, from, next);

  const userToken = localStorage.getItem("userToken");

  if (userToken) {
    // queremos navegar!
    next();
  } else {
    alert("Admin access only");
    next({ name: "login" });
  }
};

export default haveRoleGuard;