import { useContext } from "react";
import { UserContext } from "../../contextes";
import { PageTitle } from "../PageTitle/PageTitle";

export function Profile() {
  const { user } = useContext(UserContext);

  return (
    <>
      <PageTitle title="Profil" />
    </>
  );
}
