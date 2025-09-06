export class StringBuilder {
  private value = '';

  static parse(raw: string): StringBuilder {
    const builder = new StringBuilder();
    builder.value = raw;

    return builder;
  }

  fallbackLetters(): StringBuilder {
    const words = this.value.split(' ');

    if (words.length > 1) {
      this.value = words.map(item => item[0]).join('');

      return this;
    }
    this.value = this.value[0];

    return this;
  }

  /**
   * separate all words and capitalize the first letter
   * @param separator default as space ' '
   * @returns
   */
  capitalize(separator = ' '): StringBuilder {
    const words = this.value.split(separator);

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
