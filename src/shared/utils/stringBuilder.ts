export class StringBuilder {
  private value = '';
  private listValue: string[] = [];

  static parse(raw: string | string[]): StringBuilder {
    const builder = new StringBuilder();
    if (Array.isArray(raw)) {
      builder.listValue = raw;
    } else {
      builder.value = raw;
    }

    return builder;
  }

  fallback(): StringBuilder {
    const words = this.value.split(' ');

    this.value = words.map(item => item.charAt(0)).join('');

    return this;
  }
  listFallback(): StringBuilder {
    this.value = this.listValue.map(item => item.charAt(0)).join('');

    return this;
  }

  /**
   * separate all words and capitalize the first letter
   * @param separator default as space ' '
   * @returns
   */
  capitalize(separator = ' '): StringBuilder {
    const validateSeparator = separator === '' ? '' : separator;
    const words = this.value.split(validateSeparator);

    this.value = words
      .map(item => {
        const firstLetter = item[0];
        const restOfWord = item.slice(1);

        return `${firstLetter.toUpperCase()}${restOfWord.toLowerCase()}`;
      })
      .join(separator);

    return this;
  }

  build(): string {
    return this.value;
  }
}
