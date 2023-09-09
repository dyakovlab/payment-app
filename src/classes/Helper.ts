interface IBreadcrumb {
  title: string;
  link: string;
}

const dictionary =
  'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum';

class Helper {
  private static readonly specialItems = new Set(['cards', 'transactions']);
  private static readonly dictionaryArr = dictionary.split(' ');

  public static getBreadcrumbs(url: string): IBreadcrumb[] {
    const result: IBreadcrumb[] = [
      {
        title: 'Home',
        link: '/'
      }
    ];

    const urlArr = url.split('/');
    const urlArrLengthMinusOne = urlArr.length - 1;

    urlArr.forEach((item, index) => {
      if (item.length) {
        const isSpecialItem = this.specialItems.has(item);
        result.push({
          title: isSpecialItem ? `/${item.charAt(0).toUpperCase()}${item.slice(1)}` : `/${item}`,
          link: index < urlArrLengthMinusOne ? `${result[result.length - 1].link}${item}/` : ''
        });
      }
    });

    return result;
  }

  public static getRandomIntInInterval(min: number, max: number): number {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }

  public static getRandomString(length: number): string {
    const entry = this.getRandomIntInInterval(0, this.dictionaryArr.length - length - 1);
    return this.dictionaryArr.slice(entry, entry + length).join(' ');
  }
}

export default Helper;
