export const types = (type: string) => {
  switch (type) {
    case "smartphones":
      return "f7a575dd-49c3-4d12-8464-33288dad7ddf";
    case "laptops":
      return "b7e0d69f-cf97-4bec-a62e-2ae02e17da36";
    case "accessories":
      return "f5959dda-b7cf-4b7c-82dd-089a21353cd4";
    default:
      return null;
  }
};
