import router from 'next/router';
jest.mock('next/router', () => require('next-router-mock'));

describe('router', () => {
  it('supports the `push` and `login` router', () => {
    router.push('/api/login');
    expect(router).toMatchObject({
      asPath: '/api/login',
      pathname: '/api/login',
      query: {},
    });
  });
  it('supports the `push` and `file` router', () => {
    router.push({
      pathname: '/api/[file]',
      query: { file: '73a0c76b-f452-4e72-8436-f90e85f03712' },
    });
    expect(router).toMatchObject({
      asPath: '/api/73a0c76b-f452-4e72-8436-f90e85f03712',
      pathname: '/api/[file]',
      query: { file: '73a0c76b-f452-4e72-8436-f90e85f03712' },
    });
  });
  it('supports the `push` and `location` router', () => {
    router.push({
      pathname: '/api/location',
    });
    expect(router).toMatchObject({
      asPath: '/api/location',
      pathname: '/api/location',
    });
  });
  it('supports the `push` and `locations` router', () => {
    router.push({
      pathname: '/api/locations',
    });
    expect(router).toMatchObject({
      asPath: '/api/locations',
      pathname: '/api/locations',
    });
  });
  it('supports the `push` and `edit` router', () => {
    router.push({
      pathname: '/api/edit',
    });
    expect(router).toMatchObject({
      asPath: '/api/edit',
      pathname: '/api/edit',
    });
  });
  it('supports the `push` and `create` router', () => {
    router.push({
      pathname: '/api/create',
    });
    expect(router).toMatchObject({
      asPath: '/api/create',
      pathname: '/api/create',
    });
  });
});
