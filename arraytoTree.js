const items = [
  { id: 1, parentId: null, name: '1' },
  { id: 2, parentId: 1, name: '2' },
  { id: 3, parentId: 2, name: '3' },
  { id: 4, parentId: 3, name: '4' },
];

function arrayToTree(arr) {
  const map = {};
  const result = [];
  // 首先将数组元素放入映射中
  for (const item of items) {
    map[item.id] = { ...item, children: [] };
  }

  for (let item of items) {
    if (item.parentId === null) {
      result.push(map[item.id])
    } else {
      map[item.parentId].children.push(map[item.id])
    }
  }
  return result[0];
}

console.log(JSON.stringify(arrayToTree(items)));