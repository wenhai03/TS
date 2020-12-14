interface Girl{
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propsname: string]: any;
  say(): string;
}

interface Teacher extends Girl {
  teach(): string
}

class XiaoJieJie implements Teacher {
  name = '刘英'
  age = 18
  bust = 90
  say() {
    return '欢迎光临'
  }

  teach(): string {
    return ''
  }
}

