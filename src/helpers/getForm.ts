export const getFormData = (e: any) => {
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  return data;
};
