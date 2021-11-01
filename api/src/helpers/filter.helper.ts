import { Prisma } from ".prisma/client";

export class FilterHelper<T> {
  searchParams: URLSearchParams;

  constructor(paramsString: string) {
    this.searchParams = new URLSearchParams(paramsString);
  }

  /**
   * Check if the query param container "filter"
   * @returns True if it contains filter, false otherwise
   */
  isFilter(): boolean {
    if (this.searchParams.has("filter")) {
      return true;
    }

    return false;
  }

  /**
   * Decode and parse to json everything in filter query params
   * Should be provided as Prisma.SelectSubset
   * @returns {Prisma.SelectSubset<T, Prisma.CategoryFindUniqueArgs>} parsed query params
   */
  decode(): Prisma.SelectSubset<T, Prisma.CategoryFindUniqueArgs> {
    if (this.isFilter()) {
      return JSON.parse(this.searchParams.get("filter"));
    } else {
      return null;
    }
  }
}
