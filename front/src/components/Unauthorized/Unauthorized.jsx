import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";

export default function Unauthorized() {
  return (
    <>
      <PageTitleHelper title="Non autorisé" />
      L'accès à cette page n'est pas autorisée.
      <br />
      Si vous pensez que c'est une erreur, veuillez contacter votre
      administrateur.
    </>
  );
}
