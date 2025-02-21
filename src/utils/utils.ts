export function scrollById(id: string) {
  const element = document.getElementById(id);
  if (!element) throw new Error(`id: ${id} not set properly`);
  scrollTo({ top: element.offsetTop, behavior: "smooth" });
}
