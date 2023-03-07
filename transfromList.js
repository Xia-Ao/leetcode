// transform({
//   0: {
//     username: '0',
//     department: 'A-B-C',
//   },
//   1: {
//     username: '1',
//     department: 'A-B-D',
//   },
//   2: {
//     username: '2',
//     department: 'A-X-Y',
//   },
// })
// 打印结果：
// [
//   {
//     name: 'A',
//     path: 'A',
//     children: [
//       {
//         name: '0',
//         path: 'A-B',
//         children: [
//           { name: '0', path: 'A-B-C', children: [] },
//           { name: '1', path: 'A-B-D', children: [] },
//         ],
//       },
//       {
//         name: '2',
//         path: 'A-X',
//         children: [
//           {
//             name: '2', path: 'A-X-Y', children: []
//           }
//         ]
//       },
//     ],
//   }
// ]
const router = {
  0: {
    username: '0',
    department: 'A-B-C',
  },
  1: {
    username: '1',
    department: 'A-B-D',
  },
  2: {
    username: '2',
    department: 'A-X-Y',
  },
  3: {
    username: '3',
    department: 'C-E-F',
  },
  4: {
    username: '4',
    department: 'C-E-D',
  },
}

function transformList(obj) {
  const res = [];
  const map = new Map();
  for (let key in obj) {
    const { username, department } = obj[key];
    const paths = department.split('-');
    for (let i = 0; i < paths.length; i++) {
      const newPath = paths.slice(0, i + 1).join('-');
      // console.log('newPath', newPath);
      // 已有 下一个子path
      if (map[newPath]) {
        continue;
      }
      const curNode = new Router(username, newPath);
      // 第一个并且是新的path，作为一条新的rootNode push到res
      if (!map[newPath] && i === 0) {
        map[newPath] = curNode;
        res.push(map[newPath]);
        continue;
      }
      // 剩下的就是新增的子path
      const pre = paths.slice(0, i).join('-');
      // console.log('pre', pre, map);
      map[newPath] = curNode;
      map[pre].children.push(curNode)
    }
  }
  console.log(JSON.stringify(res));
}
class Router {
  constructor(name, path) {
    return {
      name,
      path,
      children: [],
    }
  }
}
transformList(router);