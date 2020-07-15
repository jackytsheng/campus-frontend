import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";

const url = "/courses/";

export default (id) =>{
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.get(`${url}${id}`);
  }