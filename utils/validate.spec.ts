import { validateEmail } from './validate';

describe('Validate', () => {
  it('Is validate email', () => {
    const isValidate = validateEmail('hjunor@gmail.com');
    expect(isValidate).toEqual(true);
  });
  it('Is validate not email', () => {
    const isValidate = validateEmail('hjunorgmail.com');
    expect(isValidate).toEqual(false);
  });
  it('Is validate not email', () => {
    const isValidate = validateEmail('hjunor@gmail');
    expect(isValidate).toEqual(false);
  });
  it('Is validate not email', () => {
    const isValidate = validateEmail('hjunorgmail');
    expect(isValidate).toEqual(false);
  });
});
