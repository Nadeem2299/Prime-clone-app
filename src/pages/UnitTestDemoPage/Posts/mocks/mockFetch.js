const mockPostList = [
  {
    id: 1,
    title: 'leave first ball -- do not hit',
    body: '.......'
  },
  {
    id: 2,
    title: 'cricket match #2 -- result match to be lost',
    body: '.......'
  }
];

export const mockFetch = async () => {
  const res = {
    json: async () => {
      return mockPostList;
    }
  };
  return res;
};
