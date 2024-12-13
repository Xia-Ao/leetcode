// 存在如下所示的字符串数组，请实现输入一个字符串，检索字符串数组，返回以该字符串开头的字符串数组。
const words = ["preference", "present", "pressure", "preview", "premium", "statement", "statistics", "stabilize", "stereotype", "stethoscope", "internship", "interview", "intersection", "intermediate", "interpretation", "relationship", "relaxation", "religious", "remarkable", "remember"]

function searchWords(input: string): string[] {
  return words.filter(word => word.startsWith(input))
}

{
  p:
  {
    r: {
      pre: 'pr',
      value: 
    }
    a: {}
  }
}


interface IMap {
  [key: string]: IMap;
}


function transform(arr: string[]): IMap {
  
  function helper(str: string, map: IMap) {
    if (!str) return map;
    const pre = str[0];
    const rest = str.slice(1);
    // if()
    if (map[pre]) {
      helper(rest, map[pre]);
    } else {
      map[pre] = 
      helper(rest, map[pre]);
    }
    return map;
  }

  const map: IMap = {};
  arr.forEach(str => {
    helper(str, map);
  })

  return map;
}

function search(map, str: string,): IMap | null {
  // while (str.length) {
  const pre = str[0];
  if (map[pre]) {
    str = str.slice(1);
    return search(map[pre], str);
  }
  return null
  // }

}


// input: 'pre'
// output: ["preference", "present", "pressure", "preview", "premium"]