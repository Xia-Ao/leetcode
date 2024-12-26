function arrayToTree(arr) {
  const map = {};
  const res = [];
  for (const item of arr) {
      map[item.id] = item;
      item.children = [];
  }
  for (const item of arr) {
      if (item.parentId === 0) {
          res.push(item);
      } else {
          if (map[item.parentId]) {
              map[item.parentId].children.push(item);
          }
      }
  }
  return res[0];
}

const arr = [
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 1, name: '部门A', parentId: 2 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
];

console.log(arrayToTree(arr));