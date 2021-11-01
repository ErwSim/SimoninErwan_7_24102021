import { Prisma } from ".prisma/client";

export class FilterHelper<T> {
  searchParams: URLSearchParams;

  constructor(paramsString: string) {
    this.searchParams = new URLSearchParams(paramsString);
  }

  isFilter(): boolean {
    if (this.searchParams.has("filter")) {
      return true;
    }

    return false;
  }

  decode(): Prisma.SelectSubset<T, Prisma.CategoryFindUniqueArgs> {
    if (this.isFilter()) {
      return JSON.parse(this.searchParams.get("filter"));
    } else {
      return null;
    }
  }
}
