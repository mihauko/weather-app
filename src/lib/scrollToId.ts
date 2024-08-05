// method to jump to the desired element by using the element's id
export const jumpToRelevantDiv = (id: string) => {
  const relevantDiv = document.getElementById(id);

  // behavior: "smooth" parameter for smooth movement
  if (relevantDiv) {
    relevantDiv.scrollIntoView({ behavior: 'smooth' });
  }
};
