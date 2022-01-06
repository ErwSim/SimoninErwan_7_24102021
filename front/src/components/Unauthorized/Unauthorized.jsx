import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";

export default function Unauthorized() {
  return (
    <>
      <PageTitleHelper title="Non autorisé" />
      L&pos;accès à cette page n&apos;est pas autorisée.
      <br />
      Si vous pensez que c&pos;est une erreur, veuillez contacter votre
      administrateur.
    </>
  );
}
