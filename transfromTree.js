
const tree = [
  {
    "name": "0",
    "path": "A",
    "children": [
      {
        "name": "0",
        "path": "A-B",
        "children": [
          {
            "name": "0",
            "path": "A-B-C",
            "children": [

            ]
          },
          {
            "name": "1",
            "path": "A-B-D",
            "children": [

            ]
          }
        ]
      },
      {
        "name": "2",
        "path": "A-X",
        "children": [
          {
            "name": "2",
            "path": "A-X-Y",
            "children": [

            ]
          }
        ]
      }
    ]
  },
  {
    "name": "3",
    "path": "C",
    "children": [
      {
        "name": "3",
        "path": "C-E",
        "children": [
          {
            "name": "3",
            "path": "C-E-F",
            "children": [
              {
                "name": "4",
                "path": "C-E-F-D",
                "children": [

                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

function transformTree(tree) {

  function dfs(tree, obj) {
    if (!tree) return obj;
    if (Array.isArray(tree)) {
      tree.forEach((item) => dfs(item, obj));
      return obj;
    }

    if (!tree.children) return obj;
    if (tree.children.length === 0) {
      const { name, path } = tree;
      obj[name] = {
        username: name,
        department: path,
      }
      return obj;
    }
    return dfs(tree.children, obj);
  }
  const router = dfs(tree, {});
  console.log(router);
  return router;
}

transformTree(tree);