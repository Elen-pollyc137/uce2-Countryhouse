export function validateEmail(email: string): string | boolean {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(String(email).toLowerCase());
}
